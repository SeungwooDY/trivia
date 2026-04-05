import { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard.jsx'
import Score from './Score.jsx'

export default function GenerateQuestions() {
    const [question, setQuestion] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [score, setScore] = useState(0);

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
        if (isCorrect) {
            setScore(score + 1);
        }
        getQuestions();
    }
    
    return (
        <>
            <div>
                <Score score={score}/>
            </div>
            <div>
                <button onClick={() => getQuestions().catch(console.error)}>New Question</button>
            </div>
            <br />
            {question && (
                    <QuestionCard
                        question={question}
                        answers={shuffledAnswers}
                        onAnswer={handleAnswer}
                    />
            )}
        </>
    )
}