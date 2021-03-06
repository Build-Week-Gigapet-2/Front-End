import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../Actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Apple from './Images/apple.png';
import Pear from './Images/pear.png';
import Potatoes from './Images/potatoes.png';
import Background from './Images/Background.jpg';

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

    //Styling Begins here

    const pageStyle = makeStyles({
        root: {
            backgroundColor: '#fff',
            // height: '100vh',
            backgroundImage: `url(${Background})`,
            // backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            overflow: 'hidden',
            position: 'relative',
            height: '950px;',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    })

    const styledForm = makeStyles({
        root: {
            display: "flex",
            flexDirection: 'column',
            padding: '0 27vw',
        }
    });

    const styledInput = makeStyles({
        root: {
            margin: '10px 0',
            backgroundColor: 'white',
            borderRadius: 3,
        }
    });

    const imageStyle = makeStyles({
        root: {
            height: "15vh",
            padding: "120px 143px",
        }
    });

    const bottomDiv = makeStyles({
        root: {
            padding: '0 24vw',
            marginLeft: '25px'
            
        }
    });

    const styledLink = makeStyles({
        root: {
            textDecoration: 'none',
            fontSize: '20px',
            color: 'white',
            border: '1px solid #DB5461',
            padding: '5px 55px',
            marginLeft: '1.5vw',
            borderRadius: 3,
            backgroundColor: '#DB5461'
        }
    });

    const page = pageStyle();
    // const images = imageStyle();
    const forms = styledForm();
    // const inputs = styledInput();
    // const signIn = bottomDiv();
    // const links = styledLink();

    return (
        <Fragment>
            <div className={page.root}>
                <div>
                    <img src={Apple} alt='Happy Apple' className="apple" />
                   
                   
                </div>


                <form onSubmit={handleSubmit} className={forms.root}>

                    <input
                        type='text'
                        className="registerinput"
                        name='username'
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        className="registerinput"
                        name='password'
                        placeholder='Password'
                        value={newUser.password}
                        onChange={handleChange}
                    />

                    <Button type='submit' variant="contained" color="primary">Sign Up</Button>
                </form>
                <img src={Pear} alt='Happy pear' className="pear" />
                <div className="register">
                    <h3 style={{ color: '#DB5461', fontWeight: 'bold' }}>Already have an account?</h3>
                    <Link to='/api/auth/login' className="signbutton">Sign In</Link>
                </div>
                <img src={Potatoes} alt='Happy Potatoe' className="potatoes" />
            </div>
            
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { register })(Register);
