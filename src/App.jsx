import { useState } from 'react'
import './App.css'
import GenerateQuestions from './components/GenerateQuestions.jsx'
import QuestionCard from './components/QuestionCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Trivia!</h1>
      <GenerateQuestions />
    </>
  )
}

export default App
