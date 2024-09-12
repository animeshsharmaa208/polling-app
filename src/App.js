import React, { useState } from 'react';
import Admin from './pages/admin';
import Poll from './pages/poll';
import Results from './pages/results';

const App = () => {
    const [poll, setPoll] = useState(null);
    const [userVote, setUserVote] = useState(null);

    return (
        <div className="container">
            {!poll && <Admin onCreatePoll={(newPoll) => setPoll(newPoll)} />}
            {poll && !userVote && <Poll poll={poll} onVote={(vote) => setUserVote(vote)} />}
            {userVote && <Results poll={poll} userVote={userVote} />}
        </div>
    );
};

export default App;
