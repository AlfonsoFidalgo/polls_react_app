import React from 'react';
import axios from 'axios';
import PollsList from './PollsList';
import PollDetails from './PollDetails';
import NewPoll from './NewPoll';

class App extends React.Component {
    state = {
        activePollId: 11047,
        pollsList: [11047,1,2,3,4]
    }

    onPollSubmit = (question, choices) => {
        //wire axios up
        // axios.post('https://polls.apiblueprint.org/questions', 
        //     {'body': {'question': question, 'choices': choices}})

        //axios promise should return the new poll id
        //poll id should be included in this.state.pollsList
    }

    render(){
        return (
            <div>
                <header><h1>Polls React App</h1></header>
                <div>
                    <NewPoll onPollSubmit={this.onPollSubmit}/>
                </div>
                <div>
                    <PollsList pollsList={this.state.pollsList}/>
                </div>
                <div>
                    <PollDetails/>
                </div>
            </div>
        );
    }
};

export default App;