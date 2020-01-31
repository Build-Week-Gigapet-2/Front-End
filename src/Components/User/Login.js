import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Actions/auth';


function Login(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })
    
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    async function asyncLogin() {
        await props.login(userData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        asyncLogin()
        props.history.push('/')
            
    }

    return (
        <Fragment>
            
            
            <form onSubmit={handleSubmit} className='log-form'>
                <input 
                    type='text'
                    className='log-input' 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    className='log-input'
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange}
                />
            
                <button type='submit' className='log-btn'>Sign In</button>
            </form>
            <div className="reg">
                <p>Don't have an account?</p>
                <Link to='/api/auth/register'>Sign Up</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { login })(Login);