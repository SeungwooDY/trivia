import { useState, useEffect } from 'react'

export default function QuestionCard( {question, answers, onAnswer, disabled, correctAnswer}) {
    const [selectedAnswer, setSelectedAnswer] = useState('');

    useEffect(() => {
        setSelectedAnswer('');
    }, [question]);

    const handleAnswer = (answer) => {
        setSelectedAnswer(answer);
        const isCorrect = answer === correctAnswer;
        onAnswer(isCorrect);
    }

    const getColor = (answer) => {
        if (!selectedAnswer) return '';
        if (answer === correctAnswer) return 'green';
        if (answer === selectedAnswer) return 'red';
        return '';
    }

    return (
        <>
            <div className="question-card">
                <p>{question.question}</p>
            </div>
            <br />
            <div className="answer-choices">
                {answers.map((answer, i) => (
                    <button key={i} className="answer-button" onClick={() => handleAnswer(answer)} disabled={disabled} style={{ backgroundColor: getColor(answer)}}>{answer}</button>
                ))}
            </div>
        </>
    )
}