import React from 'react';

class NewPoll extends React.Component {
    state = {
        question: 'Any questions?',
        options: ['yes', 'no']
    };

    onQuestionChange = (e) => {
        this.setState({ question: e.target.value })
    };

    onOptionsChange = (e) => {
        this.setState({ options: e.target.value.split(',') })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onPollSubmit(this.state.question, this.state.options)
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} 
                    className="ui form"
                    >
                    <div className="field">
                        <label><b>New Poll:</b></label>
                        <input 
                            type="text" 
                            value={this.state.question}
                            onChange={this.onQuestionChange}/>
                    </div>
                    <div className="field">
                        <label><b>Options (separated with commas):</b></label>
                        <input 
                            type="text" 
                            value={this.state.options}
                            onChange={this.onOptionsChange}>
                        </input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewPoll;