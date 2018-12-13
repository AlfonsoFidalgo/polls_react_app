import React from 'react';
import Poll from './Poll';

const PollsList = (props) => {
    const renderedPolls = props.pollsList.map(id => {
        return <Poll key={id} id={id}/>
    });

    return (<div>{renderedPolls}</div>);
}

export default PollsList;