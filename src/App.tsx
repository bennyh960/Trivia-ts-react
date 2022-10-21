import "./App.css";
import React, { useState, useMemo } from "react";
import { QuestionCard } from "./componentes/QuestionCard";
import { fetchQuizQuestions } from "./api/api";

import { Difficulty, QuestionState } from "./api/api";

// styles
import { GlobalStyleComponent } from "styled-components";

export type AnswerObject = {
  questions: string;
  answer: string;
  correct: boolean;
  cottectAnswer: string;
};
const TOTAL_QUESTIONS = 10;

function App() {
  // states
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnsweres, setUserAnsweres] = useState<AnswerObject[]>([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  // console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    // console.log("xxx");

    try {
      const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
      setQuestions(newQuestions);
      setScore(0);
      setUserAnsweres([]);
      setNumber(0);
      setLoading(false);
      // console.log(questions[0].answers);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswere = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((p) => p + 10);
      // save answer in the array of user answers
      const answerObj = {
        questions: questions[number].question,
        answer,
        correct,
        cottectAnswer: questions[number].correct_answer,
      };
      setUserAnsweres((prev) => [...prev, answerObj]);
    }
  };
  const nextQuestion = () => {
    if (number + 1 === TOTAL_QUESTIONS) setGameOver(true);
    else setNumber((p) => 1 + p);
  };
  return (
    <>
      <GlobalStyleComponent />
      <div className="app">
        <h1>REACT QUIZ</h1>
        {gameOver || userAnsweres.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score:{score}</p>}
        {loading && <p className="loading">loading...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answeres={questions[number].answers}
            userAnswere={userAnsweres ? userAnsweres[number] : undefined}
            callback={checkAnswere}
          />
        )}
        {!gameOver && !loading && userAnsweres.length === number + 1 && number !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            NEXT QUESTION
          </button>
        )}
      </div>
    </>
  );
}

export default App;
