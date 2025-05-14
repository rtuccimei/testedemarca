import React from 'react';
import { Question, Answer } from '../types';
import { useQuiz } from '../contexts/QuizContext';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  onAnswerSelected: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSelected }) => {
  const { addAnswer, answers } = useQuiz();
  
  const selectedValue = answers.find(a => a.questionId === question.id)?.selectedValue;
  
  const handleOptionSelect = (value: number) => {
    addAnswer({ questionId: question.id, selectedValue: value });
    onAnswerSelected();
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{question.dimension}</h3>
        <p className="text-gray-600 mt-2">{question.question}</p>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option.value)}
            className={`w-full text-left p-4 rounded-md transition-all ${
              selectedValue === option.value
                ? 'bg-indigo-100 border-2 border-indigo-500 shadow-sm'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-start">
              <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                selectedValue === option.value
                  ? 'bg-indigo-600 text-white'
                  : 'border border-gray-300'
              }`}>
                {selectedValue === option.value && (
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="text-gray-700">{option.text}</div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;