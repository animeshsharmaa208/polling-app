import React from 'react';

const Poll = ({ poll, onVote }) => {
    const handleVote = (answer) => {
        onVote(answer);
    };

    return (
        <div>
            <h2>{poll.question}</h2>
            <ul>
                {poll.answers.map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => handleVote(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Poll;
