import React from 'react';

class NewPoll extends React.Component {
    state = {
        question: '',
        options: ['yes', 'no']
    };

    onInputChange = (e) => {
        this.setState({ question: e.target.value })
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onPollSubmit(this.state.question, this.state.options)
    }

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
                            onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPoll;