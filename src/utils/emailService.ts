import emailjs from 'emailjs-com';
import { UserData, Answer } from '../types';
import { getMaturityLevel, getQuestionFeedback, getNormalizedScore } from './scoring';
import { questions } from '../data/questions';
import { google } from 'googleapis';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;

interface ReportData {
  userData: UserData;
  score: number;
  maturityLevel: string;
  maturityDescription: string;
  feedbackByQuestion: { dimension: string; feedback: string }[];
}

export const generateReport = (userData: UserData, answers: Answer[]): ReportData => {
  const score = answers.reduce((total, answer) => total + answer.selectedValue, 0);
  const normalizedScore = getNormalizedScore(score);
  const maturity = getMaturityLevel(score);
  
  const feedbackByQuestion = answers.map(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    return {
      dimension: question?.dimension || '',
      feedback: getQuestionFeedback(answer.questionId, answer.selectedValue)
    };
  });

  return {
    userData,
    score: normalizedScore,
    maturityLevel: maturity.level,
    maturityDescription: maturity.description,
    feedbackByQuestion
  };
};

export const sendReportEmail = async (reportData: ReportData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: reportData.userData.email,
      to_name: reportData.userData.fullName,
      company_name: reportData.userData.companyName,
      score: reportData.score,
      maturity_level: reportData.maturityLevel,
      maturity_description: reportData.maturityDescription,
      feedback: reportData.feedbackByQuestion.map(fb => 
        `<h3>${fb.dimension}</h3><p>${fb.feedback}</p>`
      ).join('')
    };
    
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    await saveToGoogleSheets(reportData);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

const saveToGoogleSheets = async (reportData: ReportData) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(import.meta.env.VITE_GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const values = [
      [
        new Date().toISOString(),
        reportData.userData.fullName,
        reportData.userData.email,
        reportData.userData.companyName,
        reportData.userData.position,
        reportData.userData.industry,
        reportData.userData.companySize,
        reportData.userData.location,
        reportData.score,
        reportData.maturityLevel,
        reportData.feedbackByQuestion.map(fb => `${fb.dimension}: ${fb.feedback}`).join('\n')
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Respostas!A:K',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    return true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};