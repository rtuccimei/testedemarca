export interface Question {
  id: number;
  dimension: string;
  question: string;
  options: Option[];
}

export interface Option {
  value: number;
  text: string;
}

export interface Answer {
  questionId: number;
  selectedValue: number;
}

export interface MaturityLevel {
  min: number;
  max: number;
  level: string;
  description: string;
}

export interface FeedbackText {
  questionId: number;
  value: number;
  text: string;
}

export interface UserData {
  fullName: string;
  email: string;
  companyName: string;
  position: string;
  industry: string;
  companySize: string;
  location: string;
}

export interface QuizContextType {
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  addAnswer: (answer: Answer) => void;
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  totalScore: number;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  getMaturityLevel: () => MaturityLevel;
  getQuestionFeedback: (questionId: number) => string;
  resetQuiz: () => void;
}