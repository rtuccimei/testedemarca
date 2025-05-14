import { Answer } from '../types';
import { maturityLevels } from '../data/maturityLevels';
import { feedbackTexts } from '../data/feedbackTexts';

export const calculateTotalScore = (answers: Answer[]): number => {
  return answers.reduce((total, answer) => total + answer.selectedValue, 0);
};

export const getMaturityLevel = (score: number) => {
  // Convert the score to a scale of 0-100 from 0-60
  const normalizedScore = Math.min(Math.round((score / 60) * 100), 100);
  
  return maturityLevels.find(
    level => normalizedScore >= level.min && normalizedScore <= level.max
  ) || maturityLevels[0]; // Default to the first level if none is found
};

export const getQuestionFeedback = (questionId: number, value: number): string => {
  return feedbackTexts.find(
    feedback => feedback.questionId === questionId && feedback.value === value
  )?.text || "Feedback não disponível para esta resposta.";
};

export const getNormalizedScore = (score: number): number => {
  // Convert score from 0-60 to 0-100 scale
  return Math.min(Math.round((score / 60) * 100), 100);
};