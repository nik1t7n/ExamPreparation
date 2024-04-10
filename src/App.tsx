import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/CustomButton";
import QuizCard from "./components/QuizCard";
import SuccessMessage from "./components/SuccessMessage";
import Tooltip from "./components/Tooltip";
import { questions } from "./data/questions";
import HomePage from "./pages/HomePage/HomePage";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowSuccessMessage(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setShowSuccessMessage(false);
  };

  // const correctOption = questions[currentQuestion].options.find(
  //   (option) => option.isCorrect
  // );
  // const correctOptionText = correctOption ? correctOption.text : "";

  return (
    <>
      <Navbar/>
      <div className="absolute top-0 right-0 m-4"> {/* Обертываем ThemeToggler в div и применяем классы к нему */}
        <ThemeToggler />
      </div>
      <Outlet/>
      </>
  );
}

export default App;