import React, { useState } from 'react';

const Admin = ({ onCreatePoll }) => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState(['', '']);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePoll({ question, answers: answers.filter(a => a) });
    };

    return (
        <div>
            <h2>Create a Poll</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                {answers.map((answer, index) => (
                    <div key={index}>
                        <label>Answer {index + 1}:</label>
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Create Poll</button>
            </form>
        </div>
    );
};

export default Admin;
