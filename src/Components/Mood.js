import React from 'react';
import Navbar from './Navbar';
import { addDoc, collection, Timestamp } from "firebase/firestore";

export default class Mood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            happy: false,
            sad: false,
            angry: false,
            calm: false,
            hopeful: false,
            moodNotes: ""
        };
        this.isChecked = this.isChecked.bind(this);
        this.handleMoodNotesChange = this.handleMoodNotesChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    isChecked(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        
        });
    }

    handleChange(event) {
        const checked = event.target.checked;
        if(checked){
            this.setState({mood: [this.state.mood, event.target.value]});
        } else {
            const index = this.state.mood.indexOf(event.target.value);
            this.state.languages.splice(index, 1);
            this.setState({mood: this.state.mood})
        }
    }

    handleMoodNotesChange(event) {
        this.setState({moodNotes: event.target.value})
    }

    onSubmit() {
        addDoc(collection(this.props.DB, "moods"), {
            feelings: {
                happy: this.state.happy,
                sad: this.state.sad,
                angry: this.state.angry,
                calm: this.state.calm,
                hopeful:this.state.hopeful,
            },
            moodNotes: this.state.moodNotes,
            createdAt: Timestamp.now()
        }).then(() => {
            this.setState({
                happy: false,
                sad: false,
                angry: false,
                calm: false,
                hopeful: false,
                moodNotes: ""
            })
        })
    }







    // _addMood() {
    //     setDoc(doc(this.props.DB, "Moods", this.state.Happy), {
    //         Happy:this.state.Happy,
    //         Sad: this.state.Sad,
    //         Angry: this.state.Angry,
    //         Calm: this.state.Calm,
    //         Hopeful: this.state.Hopeful
    //     });
    //     this.setState({
    //         Happy: "",
    //         Sad: "",
    //         Angry: "",
    //         Calm: "",
    //         Hopeful: ""
            
    //     })
    //     }
    

    render() {
        return (
            <div >
                <Navbar />

                <div>
                    <h1 className='mood-medilog'>MediLog Medical Journal</h1>
                </div>
                
                <h3 className='mood-title'>Mood</h3>
                <div className='mood-all'>
                    <label className='mood'>
                        <input
                            name='happy'
                            type='checkbox'
                            checked={this.state.happy}
                            onChange={this.isChecked}
                        />
                        <span className='mood-words'>Happy</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input
                        name='sad'
                        type='checkbox'
                        checked={this.state.sad}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Sad</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='angry'
                        type='checkbox'
                        checked={this.state.angry}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Angry</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='calm'
                            type='checkbox'
                            checked={this.state.calm}
                            onChange={this.isChecked}
                        />
                        <span className='mood-words'>Calm</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='hopeful'
                        type='checkbox'
                        checked={this.state.hopeful}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Hopeful</span>
                        <br></br>
                    <div>
                        <p className='mood-notes-add'>Additional Notes</p>
                        <textarea value={this.state.moodNotes} placeholder='"Enter information about your mood here..."' className='mood-notes' onChange={this.handleMoodNotesChange} />
                        <br></br>
                    </div>
                    <button onClick={() => this.onSubmit()} className='mood-submit'>Submit</button>
                    </label>

                    <p>{this.state.Happy}</p>
                    <p>{this.state.Sad}</p>
                    <p>{this.state.Angry}</p>
                    <p>{this.state.Calm}</p>
                    <p>{this.state.Hopeful}</p>
                </div>
            </div>
        )
        
    }
}
