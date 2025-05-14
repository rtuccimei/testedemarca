import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuiz } from '../contexts/QuizContext';
import { UserData } from '../types';
import { motion } from 'framer-motion';
import { Building2, User, Mail, Briefcase, MapPin, Building, Users } from 'lucide-react';

const UserDataForm: React.FC = () => {
  const navigate = useNavigate();
  const { setUserData } = useQuiz();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserData>();
  
  const onSubmit = (data: UserData) => {
    setUserData(data);
    navigate('/thank-you');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Seus dados para o relatório detalhado
          </h1>
          <p className="mt-2 text-gray-600">
            Preencha os campos abaixo para receber seu relatório personalizado por e-mail
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                Nome completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Digite seu nome completo"
                  {...register('fullName', { required: 'Nome é obrigatório' })}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="seu@email.com"
                  {...register('email', { 
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Endereço de e-mail inválido"
                    }
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="companyName">
                Nome da empresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="companyName"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.companyName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Nome da sua empresa"
                  {...register('companyName', { required: 'Nome da empresa é obrigatório' })}
                />
              </div>
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="position">
                Cargo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="position"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.position ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Seu cargo na empresa"
                  {...register('position', { required: 'Cargo é obrigatório' })}
                />
              </div>
              {errors.position && (
                <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="industry">
                Setor de atuação
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="industry"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.industry ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Ex: Tecnologia, Saúde, Educação, etc."
                  {...register('industry', { required: 'Setor é obrigatório' })}
                />
              </div>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="companySize">
                Tamanho da empresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="companySize"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.companySize ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white`}
                  {...register('companySize', { required: 'Tamanho da empresa é obrigatório' })}
                >
                  <option value="">Selecione o tamanho</option>
                  <option value="pequeno">Pequeno porte</option>
                  <option value="médio">Médio porte</option>
                  <option value="grande">Grande porte</option>
                </select>
              </div>
              {errors.companySize && (
                <p className="mt-1 text-sm text-red-600">{errors.companySize.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                Cidade e Estado
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="location"
                  type="text"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border ${errors.location ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Ex: São Paulo, SP"
                  {...register('location', { required: 'Localização é obrigatória' })}
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Receber relatório completo'
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UserDataForm;