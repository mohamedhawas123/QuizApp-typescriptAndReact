import { type } from 'os'
import React from 'react'
import {AnswerObject} from '../App'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  useranswers: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number

}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, useranswers, questionNr, totalQuestion }) => {
  
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestion}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => {
          return (
            <button disabled={useranswers? true: false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{__html: answer}} />
              </button>
            
          )
        })}
      </div>
    </div>
  )
}


export default QuestionCard