import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { generateReport, sendReportEmail } from '../utils/emailService';
import { motion } from 'framer-motion';
import { Mail, Calendar, CheckCircle, Loader } from 'lucide-react';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  const { userData, answers, resetQuiz } = useQuiz();
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(true);
  
  useEffect(() => {
    if (!userData) {
      navigate('/');
      return;
    }
    
    const sendEmail = async () => {
      try {
        setIsSending(true);
        const reportData = generateReport(userData, answers);
        const success = await sendReportEmail(reportData);
        setEmailSent(success);
      } catch (error) {
        console.error('Error sending email:', error);
        setEmailSent(false);
      } finally {
        setIsSending(false);
      }
    };
    
    sendEmail();
  }, [userData, answers, navigate]);
  
  const handleRestartQuiz = () => {
    resetQuiz();
    navigate('/');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full"
        >
          {isSending ? (
            <Loader className="h-10 w-10 text-indigo-600 animate-spin" />
          ) : (
            <CheckCircle className="h-10 w-10 text-green-600" />
          )}
        </motion.div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {isSending ? "Enviando seu relatório..." : "Obrigado!"}
        </h1>
        
        {!isSending && (
          <>
            <p className="text-gray-600 mb-8">
              {emailSent
                ? `Seu relatório personalizado foi enviado para ${userData?.email}. Verifique sua caixa de entrada nos próximos minutos.`
                : "Estamos processando seu relatório e enviaremos em breve para o e-mail cadastrado."}
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Próximos passos
              </h2>
              <p className="text-gray-600 mb-4">
                Após analisar seu relatório, considere agendar uma reunião para discutirmos estratégias para evoluir a maturidade da sua marca.
              </p>
              
              <a
                href="https://calendly.com/tuccimei-branding/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Agendar reunião estratégica
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={handleRestartQuiz}
                className="inline-flex items-center justify-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Iniciar um novo diagnóstico
              </button>
              
              <a
                href="mailto:contato@tuccimei.com.br"
                className="inline-flex items-center justify-center text-gray-600 hover:text-gray-800 font-medium"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contato
              </a>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ThankYou;