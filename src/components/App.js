import React from 'react';
import axios from 'axios';
import PollsList from './PollsList';
import PollDetails from './PollDetails';
import NewPoll from './NewPoll';

class App extends React.Component {
    state = {
        initialPolls: [1],
        activePoll: null,
        polls: []
    }

    componentDidMount(){
        axios.get(`https://polls.apiblueprint.org/questions/${this.state.initialPolls[0]}`)
        .then(response => {
            this.setState({polls: [... this.state.polls, response.data]});
            this.setState({activePoll: this.state.polls[0]});
        })
        .catch(err => console.log(err))
    }

    onPollSubmit = (question, choices) => {
        axios({
            method: 'post',
            url: 'https://polls.apiblueprint.org/questions',
            data: {
                question: question,
                choices: choices
            }
        }).then(response => {
            this.setState({polls: [... this.state.polls, response.data]})
        }).catch(err => console.log(err));
    }

    pollSelect = (poll) => {
        this.setState({activePoll: poll})
    }

    render(){
        return (
            <div>
                <header><h1>Polls React App</h1></header>
                <div className="ui container">
                    <NewPoll onPollSubmit={this.onPollSubmit}/>
                </div>
                <div>
                    <PollsList
                    polls={this.state.polls}
                    pollSelect={this.pollSelect}/>
                </div>
                <div>
                    <PollDetails activePoll={this.state.activePoll}/>
                </div>
            </div>
        );
    }
};

export default App;