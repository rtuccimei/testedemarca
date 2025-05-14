import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, Clock, MailOpen } from 'lucide-react';

const Intro: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-4 inline-flex items-center justify-center"
        >
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/master/tuccimei-branding.png" 
            alt="Tuccimei Branding" 
            className="h-20"
          />
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Teste de Maturidade de Marca
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubra o nível de maturidade da sua marca e receba recomendações personalizadas para evoluir sua estratégia de branding
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rápido</h3>
            <p className="text-gray-600">Leva apenas 5 minutos para completar o diagnóstico de 12 perguntas</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Estratégico</h3>
            <p className="text-gray-600">Avaliação profunda em 12 dimensões críticas de gestão de marca</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <MailOpen className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalizado</h3>
            <p className="text-gray-600">Receba um relatório detalhado com recomendações específicas para sua marca</p>
          </motion.div>
        </div>
      </div>
      
      <div className="text-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate('/quiz')}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md text-lg transition-colors"
        >
          Iniciar Diagnóstico
        </motion.button>
        
        <p className="mt-4 text-sm text-gray-500">
          Aproximadamente 5 minutos • 12 perguntas • Resultado imediato
        </p>
      </div>
    </motion.div>
  );
};

export default Intro;