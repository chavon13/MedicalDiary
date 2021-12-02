import React from 'react';
import Navbar from './Navbar';
import{collection, query, getDocs } from "firebase/firestore";


export default class Entry2 extends React.Component {
    constructor() {
        super()
        this.state = {
            loading:false,
            moods: [
                {
                    createdAt: 12,
                    feelings: 'angry',
                    moodNotes: 'bad day at work'
                }
            ]
        }
    }
    componentDidMount() {
        const q = query(collection (this.props.DB, "moods"));
        getDocs(q).then((querySnapshot) =>{
            let moodData = [];
            querySnapshot.forEach((doc) =>{
                moodData.push(doc.data());
            })
            console.log(moodData)
            this.setState({moods: moodData, loading: false})
        })
    }
    render(){
        return (
            <div>
                <Navbar />

                <div>
                    <h1>MediLog Medical Journal</h1>
                </div>

                <h3>Your Daily Journal</h3>
                <br></br>

                <div>
                    {this.state.loading === true && <p>loading...</p>}
                    {!this.state.loading && this.state.moods.map(function(mood){
                        return(<div key={mood.feelings}>
                            {/* <p> {mood.createdAt} | {mood.feelings} | {mood.moodNotes}</p> */}
                            </div>)
                    })}
                </div>

            </div>
        )
    }
}