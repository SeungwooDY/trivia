import { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard.jsx'
import Score from './Score.jsx'

export default function GenerateQuestions() {
    const [question, setQuestion] = useState(null);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const getQuestions = async () => {
        setDisabled(true);

        const response = await fetch('https://opentdb.com/api.php?amount=1');
        const data = await response.json();

        const question = data.results[0];

        setQuestion(question);
        setShuffledAnswers(
            [...question.incorrect_answers, question.correct_answer]
            .sort(() => Math.random() - 0.5))
        
        setDisabled(false);
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
        <div className='d-flex flex-column align-items-center'>
            <div>
                <Score score={score}/>
            </div>
            <br />
            <div>
                <button 
                    className="btn btn-primary" 
                    onClick={getQuestions}
                >
                    New Question
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
        </div>
    )
}