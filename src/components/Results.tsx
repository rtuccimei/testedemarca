import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { getNormalizedScore } from '../utils/scoring';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart3 } from 'lucide-react';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const { totalScore, getMaturityLevel } = useQuiz();
  const [wantReport, setWantReport] = useState<boolean | null>(null);
  
  const normalizedScore = getNormalizedScore(totalScore);
  const maturityLevel = getMaturityLevel();
  
  const handleReportRequest = (wantReport: boolean) => {
    setWantReport(wantReport);
    if (wantReport) {
      navigate('/user-data');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-center">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/master/tuccimei-branding.png" 
            alt="Tuccimei Branding" 
            className="h-16 w-auto mx-auto mb-4 invert"
          />
          <h1 className="text-3xl font-bold text-white">Diagnóstico Concluído!</h1>
          <p className="mt-2 text-indigo-100">
            Obrigado por completar o diagnóstico de maturidade da sua marca
          </p>
        </div>
        
        <div className="p-6">
          <div className="mb-8 text-center">
            <div className="relative inline-flex items-center justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center">
                <motion.div 
                  className="relative w-28 h-28 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                >
                  {normalizedScore}/100
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800">
                {maturityLevel.level}
              </h2>
              <p className="mt-3 text-gray-600">
                {maturityLevel.description}
              </p>
            </motion.div>
          </div>
          
          {wantReport === null && (
            <motion.div 
              className="mt-8 p-6 bg-indigo-50 rounded-lg border border-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Deseja receber um relatório detalhado?
              </h3>
              <p className="text-gray-600 mb-6">
                Podemos enviar um relatório personalizado com recomendações específicas para cada dimensão avaliada e próximos passos para evoluir a maturidade da sua marca.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button 
                  onClick={() => handleReportRequest(true)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md flex justify-center items-center transition-colors"
                >
                  Sim, quero receber o relatório
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
                
                <button 
                  onClick={() => handleReportRequest(false)}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 border border-gray-300 rounded-md transition-colors"
                >
                  Não, apenas o resultado geral
                </button>
              </div>
            </motion.div>
          )}
          
          <div className="mt-8 flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() => navigate('/')}
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Iniciar um novo diagnóstico
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;