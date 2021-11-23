import React from 'react'

export default class Entry1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your entry has been submitted' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <p>Keywords - What are some keywords you would use to describe yourself right now?</p>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <br></br>
                    <p>Symptoms - Tell me about your symptoms.</p>
                    <input type='text' value={this.state.value} onchange={this.handleChange} />
                </label>
            </form>
        )
    }
}
        