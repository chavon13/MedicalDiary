import React from 'react'
import Navbar from './Navbar'
import Logo from './logo.png'
import { setDoc, doc } from "firebase/firestore";

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
            notes: this.state.notes,
    });
    this.setState({
        keyword: "",
        value: "",
        notes: ""
    })
}

    render() {
        return(
            <div>
                <Navbar />
                <header>
                <img src={Logo} alt="Logo" />
                <div>
                    <h1 className='medilog-title'>MediLog Medical Journal</h1>
                </div>
                </header>
                <div>
                    <h2 className='entry1-title'> Keywords and Symptoms</h2>
                </div>

                <form className='entry1-all' onSubmit={this.handleSubmit}>
                    <div className='entry1-inputs'>
                        <label>
                            <div className='entry-1'>
                            <p>Keywords - What are some keywords you would use to describe yourself right now?</p>
                            <p>ex: Hungry, Sleepy, Exhausted</p>
                            </div>
                            <div className='input'>
                            <input className='input-1' type='text'  onChange={this.handleKeywordChange} />
                            </div>
                        </label>
                            <br></br>
                        <label>
                            <div className='entry-1'>
                            <p>Symptoms - Tell me about and symptoms you are feeling.</p>
                            <p>ex: Headache, Nausea, Back Pain</p>
                            </div>
                            <div className='input'>
                            <input className='input-1' type='text' onChange={this.handleChange} />
                            </div>
                        </label>
                            <br></br>
                    </div>
                    <label className='addNotes-1'>
                        <p className='entry1-addNotes'>Additional Notes</p>
                        <div>
                            <textarea className='entry1-textArea' onChange={this.handleNotesChange} />
                        </div>
                        <br></br>
                        <button className='entry1-submit'>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
        