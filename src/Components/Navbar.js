import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    
    
    render(){
        return(
            <nav className='topNav'>

                <ul className='nav'>
                    <Link to="/"></Link>
                    <li className='navLi'><Link to="/mood">Mood</Link></li>
                    <li className='navLi'><Link to='/entrypage1'>Entry 1</Link></li>
                    <li className='navLi'><Link to='/entrypage2'>Entry 2</Link></li>
                </ul>

            </nav>
        )
    }
}