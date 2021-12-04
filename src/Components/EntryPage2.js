import React from 'react';
import Navbar from './Navbar';
import{collection, query, getDocs, Timestamp } from "firebase/firestore";
import moment from 'moment';


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

                <h3>Your Journal Entries</h3>
                <br></br>

                <div className='return-info'>
                    {this.state.loading === true && <p>loading...</p>}
                    {!this.state.loading && this.state.moods.map(function(mood){
                        return(
                            <div className='card' key={mood.feelings}>
                            <p className='mood-notes2'>Your notes: {mood.moodNotes}</p>
                            {Object.keys(mood.feelings).map(function(feeling) {
                                if (mood.feelings[feeling]) {
                                    return (
                                        <p className='moods-entry2'>Your mood: {feeling}</p>
                                    )
                                }
                            })}
                            <p className='timestamp'>Created on: {moment(new Date(mood.createdAt.seconds*1000)).format("MMM Do YYYY hh:mm a")}</p>
                            </div>
                    )})}
                </div>

            </div>
        )
    }
}