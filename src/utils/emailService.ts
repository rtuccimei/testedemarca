import emailjs from 'emailjs-com';
import { UserData, Answer } from '../types';
import { getMaturityLevel, getQuestionFeedback, getNormalizedScore } from './scoring';
import { questions } from '../data/questions';

const SERVICE_ID = 'service_your_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_your_template_id'; // Replace with your EmailJS template ID
const USER_ID = 'user_your_user_id'; // Replace with your EmailJS user ID

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
    
    // In a real application, you would also save the data to a database here
    saveReportToDatabase(reportData);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Mock function to demonstrate database storage
// In a real application, this would connect to a database
const saveReportToDatabase = (reportData: ReportData) => {
  console.log('Saving report to database:', reportData);
  // Implement actual database storage here
  
  // Example: If using Supabase or Firebase, you might do something like:
  // supabase
  //   .from('brand_assessments')
  //   .insert([
  //     {
  //       user_id: uuid(),
  //       user_name: reportData.userData.fullName,
  //       email: reportData.userData.email,
  //       company_name: reportData.userData.companyName,
  //       position: reportData.userData.position,
  //       industry: reportData.userData.industry,
  //       company_size: reportData.userData.companySize,
  //       location: reportData.userData.location,
  //       score: reportData.score,
  //       maturity_level: reportData.maturityLevel,
  //       answers: JSON.stringify(answers),
  //       created_at: new Date()
  //     }
  //   ])
};