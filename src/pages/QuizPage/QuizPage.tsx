import React, { useState } from 'react';
import { questions } from '../../data/questions';
import SuccessMessage from '../../components/SuccessMessage';
import QuizCard from '../../components/QuizCard';
import CustomButton from '../../components/CustomButton';
import Navbar from '../../components/Navbar';
import ThemeToggler from '../../components/ThemeToggler'; // Импортируем компонент ThemeToggler

type Props = {};

const QuizPage = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion: number) => prevQuestion + 1);
    } else {
      setShowSuccessMessage(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setShowSuccessMessage(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex justify-center items-center flex-col px-4 relative"> {/* Добавляем relative здесь */}
      <div className="absolute top-0 right-0 m-4"><ThemeToggler/></div>
      {showSuccessMessage ? (
        <SuccessMessage onReset={handleResetQuiz} />
      ) : (
        <>
          <div className="mb-8 relative w-full max-w-lg">
            <div className="">
              <QuizCard {...questions[currentQuestion]} questionsAmount={questions.length} />
            </div>
          </div>
          <div className="flex justify-center w-full">
            <CustomButton text="Next Question" onClick={handleNextQuestion} />
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
