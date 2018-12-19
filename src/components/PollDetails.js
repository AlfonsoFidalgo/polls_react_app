import React from 'react';
import axios from 'axios';


class PollDetails extends React.Component {
    state = {
        question: '',
        choices: []
    }

    renderedChoices(){
        return this.props.activePoll.choices.map(choice => {
            return(
                <div key={choice.url}>
                    <div>{choice.choice}</div>
                    <div>{choice.votes}</div>
                </div>
            )
            }
        )
    } 

    render(){
        if (!this.props.activePoll){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <div key>
                <header><h1>{this.props.activePoll.question}</h1></header>
                <div>{this.renderedChoices()}</div>
            </div>
        )
    }
    
};

export default PollDetails;