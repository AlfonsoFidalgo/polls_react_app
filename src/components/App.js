import React from 'react';

import PollsList from './PollsList';
import PollDetails from './PollDetails';

const App = () => {
    return (
        <div>
            <header><h1>Polls React App</h1></header>
            <div>
                <PollsList/>
            </div>
            <div>
                <PollDetails/>
            </div>
        </div>
    );
};

export default App;