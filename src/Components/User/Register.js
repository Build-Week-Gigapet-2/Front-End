import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../Actions/auth';

function Register(props) {
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
       
    })
    
    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.register(newUser);
        props.history.push('/api/auth/login')
    }

    return (
        <Fragment>
            <div>
              

                <form onSubmit={handleSubmit} className='log-form'>
                 
                    <input 
                        type='text'
                        className='log-input' 
                        name='username' 
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChange} 
                    />

                    <input
                        type='password' 
                        className='log-input'
                        name='password' 
                        placeholder='Password'
                        value={newUser.password}
                        onChange={handleChange} 
                    />
                
                    <button type='submit' className='log-btn'>Sign Up</button>
                </form>
                </div>

            <div className="reg">
                <p>Already have an account?</p>
                <Link to='/api/auth/login'>Sign In</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { register })(Register);