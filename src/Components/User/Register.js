import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../Actions/auth';
import { Button, TextField } from '@material-ui/core';

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

                    <TextField
                        type='text'
                        className='log-input'
                        name='username'
                        variant='outlined'
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChange}
                    />

                    <TextField
                        type='password'
                        className='log-input'
                        name='password'
                        variant='outlined'
                        placeholder='Password'
                        value={newUser.password}
                        onChange={handleChange}
                    />

                    <Button type='submit' className='log-btn'>Sign Up</Button>
                </form>
                </div>

            <div className="reg">
                <p>Already have an account?</p>
                <Link to='/api/auth/login'>
                    <Button> Sign In </Button>
                </Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { register })(Register);
