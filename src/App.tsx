import React, { useState } from 'react';
import QuestionCard from './components/QuetionComponent'


const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  

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
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
      <button onClick={checkAnser}>Chec</button>

    </div>
  );
}

export default App;