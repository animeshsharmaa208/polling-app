import React from 'react';

const Results = ({ poll, userVote }) => {
    const voteCounts = poll.answers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + (userVote === answer ? 1 : 0);
        return acc;
    }, {});

    return (
        <div>
            <h2>Poll Results</h2>
            <ul>
                {poll.answers.map((answer, index) => (
                    <li key={index}>
                        {answer}: {voteCounts[answer] || 0} votes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
