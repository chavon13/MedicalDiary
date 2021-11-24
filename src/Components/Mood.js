import React from 'react'
import Navbar from './Navbar'

export default class Mood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Happy: false,
            Sad: false,
            Angry: false,
            Calm: false,
            Hopeful: false,
            val: "Enter information about your mood here...",
        };
        this.isChecked = this.isChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        this.setState({val: event.target.value});
    }
    render() {
        return (
            <div >
                <Navbar />
                <h2 className='mood-title'>Mood</h2>
                <form className='mood-all'>
                    <label className='mood'>
                        <input name='Happy'
                        type='checkbox'
                        checked={this.state.Happy}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Happy</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='Sad'
                        type='checkbox'
                        checked={this.state.Sad}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Sad</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='Angry'
                        type='checkbox'
                        checked={this.state.Angry}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Angry</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='Calm'
                        type='checkbox'
                        checked={this.state.Calm}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Calm</span>
                    </label>
                    <br></br>
                    <label className='mood'>
                        <input name='Hopeful'
                        type='checkbox'
                        checked={this.state.Hopeful}
                        onChange={this.isChecked} />
                        <span className='mood-words'>Hopeful</span>
                        <br></br>
                    <div>
                        <p className='mood-notes-add'>Additional Notes</p>
                        <textarea value={this.state.val} className='mood-notes' onChange={this.handleChange} />
                        <br></br>
                    </div>
                    <button className='mood-submit'>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
