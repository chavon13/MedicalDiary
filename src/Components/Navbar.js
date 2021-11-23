import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    
    
    render(){
        return(
            <nav className='topnav'>

                <ul>
                    <Link to="/"></Link>
                    <Link to="/mood">Mood</Link>
                </ul>

            </nav>
        )
    }
}