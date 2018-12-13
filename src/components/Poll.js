import React from 'react';
import axios from 'axios';

class Poll extends React.Component {
    state = {
        question: ''
    }

    componentDidMount() {
        axios.get(`https://polls.apiblueprint.org/questions/${this.props.id}`)
        .then( response => {
            this.setState({question: response.question})
        })
        .catch(err => console.log('error getting poll'))
    }

    render(){
        return (<div>{this.state.question}</div>);
    }  
}

export default Poll;