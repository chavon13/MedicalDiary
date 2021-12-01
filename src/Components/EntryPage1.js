import React from 'react'
import Navbar from './Navbar'
import { setDoc, doc } from "firebase/firestore/lite";

export default class Entry1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            value: "",
            notes: "",
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleNotesChange = this.handleNotesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleKeywordChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleNotesChange(event) {
        this.setState({notes: event.target.value});
    }
    

    handleSubmit(event) {
        alert('Your entry has been submitted');
        event.preventDefault();
        setDoc(doc(this.props.DB, "Entry1", this.state.keyword), {
            keyword: this.state.keyword,
            value: this.state.value,
            notes: this.state.notes
    });
    this.setState({
        keyword: "",
        value: "",
        notes: "",
    })
}

    render() {
        return(
            <div>
                <Navbar />
                <form className='entry1-all' onSubmit={this.handleSubmit}>
                    <label>
                        <div className='entry-1'>
                        <p>Keywords - What are some keywords you would use to describe yourself right now?</p>
                        <p>ex: Hungry, Sleepy, Exhausted</p>
                        </div>
                        <div>
                        <input className='input-1' type='text'  onChange={this.handleKeywordChange} />
                        </div>
                    </label>
                        <br></br>
                    <label>
                        <div className='entry-1'>
                        <p>Symptoms - Tell me about and symptoms you are feeling.</p>
                        <p>ex: Headache, Nausea, Back Pain</p>
                        </div>
                        <div>
                        <input className='input-1' type='text' onChange={this.handleChange} />
                        </div>
                    </label>
                        <br></br>
                    <label className='addnotes-1'>
                        <p>Additional Notes</p>
                        <textarea onChange={this.handleNotesChange} />
                        <br></br>
                        <button>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
        