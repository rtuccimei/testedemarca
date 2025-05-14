import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { useQuiz } from '../contexts/QuizContext';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    answers 
  } = useQuiz();
  
  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleNext = () => {
    if (isLastQuestion) {
      navigate('/results');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const isQuestionAnswered = () => {
    return answers.some(a => a.questionId === currentQuestion.id);
  };
  
  // Auto-scroll to top when question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Teste de Maturidade de Marca</h1>
          <p className="mt-2 text-gray-600">
            Responda às 12 perguntas para avaliar a maturidade da sua marca
          </p>
        </div>
        
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
        
        <QuestionCard 
          question={currentQuestion}
          onAnswerSelected={() => {
            // Auto advance after a brief delay if not the last question
            if (!isLastQuestion && isQuestionAnswered()) {
              setTimeout(() => {
                handleNext();
              }, 500);
            }
          }}
        />
        
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className={`flex items-center px-4 py-2 rounded-md ${
              isFirstQuestion 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isQuestionAnswered()}
            className={`flex items-center px-6 py-2 rounded-md ${
              isQuestionAnswered()
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLastQuestion ? 'Ver resultados' : 'Próxima'}
            {!isLastQuestion && <ArrowRight className="h-4 w-4 ml-2" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;