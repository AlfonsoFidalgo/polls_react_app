import React from 'react';
import Poll from './Poll';

class PollsList extends React.Component {

    onPollClick = (selectedPoll) => {
        this.props.pollSelect(selectedPoll)
    }

    render(){
        const renderedPolls = this.props.polls.map(poll => {
            const pollId = poll.url.split('/')[2];
            return <Poll key={poll.id}
                    id={pollId} 
                    poll={poll}
                    question={poll.question}
                    onPollClick={this.onPollClick}/>
        });

        return (<div>{renderedPolls}</div>);
    }
}

export default PollsList;