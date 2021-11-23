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
        };
        this.isChecked = this.isChecked.bind(this);
    }

    isChecked(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <h2>Mood</h2>
                <form>
                    <label>
                        <input name='Happy'
                        type='checkbox'
                        checked={this.state.Happy}
                        onChange={this.isChecked} />
                        Happy
                    </label>
                    <br></br>
                    <label>
                        <input name='Sad'
                        type='checkbox'
                        checked={this.state.Sad}
                        onChange={this.isChecked} />
                        Sad
                    </label>
                    <br></br>
                    <label>
                        <input name='Angry'
                        type='checkbox'
                        checked={this.state.Angry}
                        onChange={this.isChecked} />
                        Angry
                    </label>
                    <br></br>
                    <label>
                        <input name='Calm'
                        type='checkbox'
                        checked={this.state.Calm}
                        onChange={this.isChecked} />
                        Calm
                    </label>
                    <br></br>
                    <label>
                        <input name='Hopeful'
                        type='checkbox'
                        checked={this.state.Hopeful}
                        onChange={this.isChecked} />
                        Hopeful
                        <br></br>
                        <button>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}
