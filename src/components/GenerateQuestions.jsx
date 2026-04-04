import { useState, useEffect } from 'react'


export default function GenerateQuestions() {
    const [question, setQuestion] = useState(0);

    const getQuestions = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=1');
        const data = await response.json();
        console.log(data);

        setQuestion(data.results[0]);
    }

    useEffect(() => {
        getQuestions().catch(console.error);
    }, [])
    
    return (
        <>
            <button onClick={() => getQuestions().catch(console.error)}>New Question</button>
            {question && <p>{question.question}</p>}
        </>
    )
}