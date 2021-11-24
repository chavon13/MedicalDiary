import React from 'react'
import Navbar from './Navbar'

export default class Entry1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            value: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleKeywordChange(event) {
        this.setState({keyword: event.target.value});
    }
    

    handleSubmit(event) {
        alert('Your entry has been submitted' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <div>
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <p>Keywords - What are some keywords you would use to describe yourself right now?</p>
                        <input type='text'  onChange={this.handleKeywordChange} />
                    </label>
                        <br></br>
                    <label>
                        <p>Symptoms - Tell me about your symptoms.</p>
                        <input type='text' onChange={this.handleChange} />
                    </label>
                        <br></br>
                    <label>
                        <p>Additional Notes</p>
                        <textarea onChange={this.handleChange} />
                        <br></br>
                        <button>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
        