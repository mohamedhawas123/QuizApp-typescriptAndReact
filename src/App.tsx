import React, { useState } from 'react';
import QuestionCard from './components/QuetionComponent'
import {fetchQuizQestions, Diffculty, QuestionState } from './api'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const totalQuestion = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameover, setGameover] = useState(true)
  

  console.log(fetchQuizQestions(totalQuestion, Diffculty.EASY ))

  const startTrivia = async () => {
    setLoading(true)
    setGameover(false)


    const newQuestions = await fetchQuizQestions(totalQuestion, Diffculty.EASY);

    setQuestions(newQuestions)
    setScore(0);
    setUserAnswers([])
    setNumber(0);
    setLoading(false)

  }

  const checkAnser = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1);

      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer

      };
      setUserAnswers(prev => [...prev, answerObject ])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if (nextQuestion == totalQuestion) {
      setGameover(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameover || userAnswers.length == totalQuestion ? (
         <button className="start" onClick={startTrivia}>
        Start 
      </button>
      ) : null}
      
     
      {!gameover ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameover && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestion={totalQuestion}
          question={questions[number].question}
          answers={questions[number].answers}
          useranswers={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnser}
        />
      )}
     
      {!gameover && !loading && userAnswers.length === number + 1 && number !== totalQuestion - 1 ? (
              <button className="next" onClick={nextQuestion}>Next Question</button>

      ): null}


    </div>
  );
}

export default App;
