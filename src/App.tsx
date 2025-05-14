import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './contexts/QuizContext';
import Layout from './components/Layout';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import Results from './components/Results';
import UserDataForm from './components/UserDataForm';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <QuizProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/user-data" element={<UserDataForm />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Layout>
      </Router>
    </QuizProvider>
  );
}

export default App;