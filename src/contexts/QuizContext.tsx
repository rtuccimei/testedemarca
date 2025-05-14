import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Answer, UserData, QuizContextType } from '../types';
import { questions } from '../data/questions';
import { calculateTotalScore, getMaturityLevel, getQuestionFeedback } from '../utils/scoring';

const QuizContext = createContext<QuizContextType | null>(null);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  
  const addAnswer = (answer: Answer) => {
    // Update existing answer or add new one
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === answer.questionId);
      if (existingIndex >= 0) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingIndex] = answer;
        return updatedAnswers;
      }
      return [...prev, answer];
    });
  };
  
  const totalScore = calculateTotalScore(answers);
  
  const getMaturityLevelValue = () => {
    return getMaturityLevel(totalScore);
  };
  
  const getQuestionFeedbackValue = (questionId: number) => {
    const answer = answers.find(a => a.questionId === questionId);
    if (!answer) return "Pergunta não respondida.";
    return getQuestionFeedback(questionId, answer.selectedValue);
  };
  
  const resetQuiz = () => {
    setAnswers([]);
    setUserData(null);
    setCurrentQuestionIndex(0);
  };
  
  const value: QuizContextType = {
    answers,
    setAnswers,
    addAnswer,
    userData,
    setUserData,
    totalScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    getMaturityLevel: getMaturityLevelValue,
    getQuestionFeedback: getQuestionFeedbackValue,
    resetQuiz
  };
  
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};