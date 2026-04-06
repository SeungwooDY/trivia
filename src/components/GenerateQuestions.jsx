import { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard.jsx'
import Score from './Score.jsx'

export default function GenerateQuestions() {
    const [question, setQuestion] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const getQuestions = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=1');
        const data = await response.json();
        console.log(data);

        const question = data.results[0];

        setQuestion(question);
        setShuffledAnswers([...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5))
    }

    useEffect(() => {
        getQuestions().catch(console.error);
    }, [])

    const handleAnswer = (isCorrect) => {
        if (disabled) return;
        setDisabled(true);
        if (isCorrect) {
            setScore(score + 1);
        }
    }
    
    return (
        <>
            <div>
                <Score score={score}/>
            </div>
            <div>
                <button className="question-button" onClick={() => {
                    getQuestions().finally(() => setDisabled(false))}}>New Question
                </button>
            </div>
            <br />
            {question && (
                    <QuestionCard
                        question={question}
                        answers={shuffledAnswers}
                        onAnswer={handleAnswer}
                        disabled={disabled}
                        correctAnswer={question.correct_answer}
                    />
            )}
        </>
    )
}