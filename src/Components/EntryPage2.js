import React from 'react';
import Navbar from './Navbar';
import{collection, query, getDocs } from "firebase/firestore/lite";


export default class EntryPage2 extends React.Component {
    constructor() {
        super()
        this.state = {
            loading:false,
            entries: [
                {
                    mood: 'sad',
                    keywords:'hungry, sleepy',
                    symptoms: 'headache, back pain'
                }
            ]
        }
    }
    componentDidMount() {
        const q = query(collection (this.props.DB,))
    }
}