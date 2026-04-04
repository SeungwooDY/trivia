import { useState } from 'react'
import './App.css'
import GenerateQuestions from './components/GenerateQuestions.jsx'
import QuestionCard from './components/Answer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Trivia!</h1>
      <GenerateQuestions />
      <QuestionCard />
      <br />
      <QuestionCard />
      <br />
      <QuestionCard />
      <br />
      <QuestionCard />
    </>
  )
}

export default App
