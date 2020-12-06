import React, { useState } from 'react';
import QuestionCard from './components/QuetionComponent'


const totalQuestion = 10

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameover, setGameover] = useState(true)
  

  const startTrivia = async () => {
    //
  }

  const checkAnser = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  }

  const nextQuestion = () => {
    //
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start 
      </button>
      <p className="score">Score..</p>
      <p>Loading Questions...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestion={totalQuestion}
        question={questions[number].question}
        answers={questions[number].answer}
        useranswers={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnser}
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
      <button onClick={checkAnser}>Chec</button>

    </div>
  );
}

export default App;
