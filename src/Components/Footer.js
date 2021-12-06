import React from 'react';


export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <footer>
                    <p>Created By: <a href="https://ashleysavage.netlify.app/" target="_blank">Ashley Savage</a></p>
                    <a href="mailto:chavon1189@gmail.com" className="footer__link">Email Me</a>
                </footer>
            </div>
        )
}
}