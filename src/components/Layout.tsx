import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/master/tuccimei-branding.png" 
              alt="Tuccimei Branding" 
              className="h-8"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Tuccimei Branding
            </span>
          </div>
          <div>
            <h2 className="text-gray-600 font-medium">Teste de Maturidade de Marca</h2>
          </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/master/tuccimei-branding.png" 
                alt="Tuccimei Branding" 
                className="h-6"
              />
              <span className="font-semibold text-gray-700">Tuccimei Branding</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Tuccimei Branding. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;