import React from 'react';
import axios from 'axios';

class Poll extends React.Component {

    onPollSelect = (e) => {
        this.props.onPollClick(this.props.poll)
    }

    render(){
        return (<div onClick={this.onPollSelect}>
                {this.props.question}
                </div>);
    }  
}

export default Poll;