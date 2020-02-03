import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../Actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

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

    const classes = makeStyles(theme => ({
            input: {
                marginBottom: '10px'
            },
    }))();

    return (
        <Fragment>
            <div>
                <Typography variant="h2" component="h1">
                    <strong>Sign Up</strong> to Gigapet
                </Typography>
                <form onSubmit={handleSubmit} className='log-form'>
                    <TextField
                        type='text'
                        className={`${classes.input}`}
                        name='username'
                        variant='outlined'
                        label='Username'
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    <TextField
                        type='password'
                        className={`${classes.input}`}
                        name='password'
                        variant='outlined'
                        label='Password'
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
