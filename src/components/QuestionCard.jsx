

export default function QuestionCard( {question, answers, onAnswer}) {

    const handleAnswer = (answer) => {
        const isCorrect = answer === question.correct_answer;
        if (isCorrect) {
            console.log("correct!");
        }
        onAnswer(isCorrect);
    }

    return (
        <>
            <div className="question-card">
                <p>{question.question}</p>
            </div>
            <br />
            <div className="answer-choices">
                {answers.map((answer, i) => (
                    <button key={i} className="answer-button" onClick={() => handleAnswer(answer)}>{answer}</button>
                ))}
            </div>
        </>
    )
}