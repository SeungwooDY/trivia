import { useState } from 'react'
import './App.css'
import GenerateQuestions from './components/GenerateQuestions.jsx'
import QuestionCard from './components/QuestionCard.jsx'

function App() {

  return (
    <>
    <div>
      <h1 className="text-center bg-warning p-3 text-dark p-4 rounded shadow-lg">Trivia!</h1>
    </div>
      <br />
      <GenerateQuestions />
    </>
  )
}

export default App
