import React from 'react'

export default function Login() {
    return(
        <div className='login-container'>
            <div>
                <form>
                    <h2> Login </h2>

                    <div className='login-user'>
                        <input type='email' placeholder='Email'></input>
                    </div>
                    <div className='login-pass'>
                        <input type='text' placeholder='Password'></input>
                    </div>
                </form>
            </div>
        </div>
    )
}