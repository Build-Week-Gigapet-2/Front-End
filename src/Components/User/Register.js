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
            height: '100vh',
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '11%'
        }
    })

    const styledForm = makeStyles({
        root: {
            display: "flex",
            flexDirection: 'column',
            padding: '0 45vw',
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
            height: "20vh",
            padding: "130px 200px 105px 200px",
            marginLeft: "60px",
        }
    });

    const bottomDiv = makeStyles({
        root: {
            padding: '0 43.5vw',
            
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
    const images = imageStyle();
    const forms = styledForm();
    const inputs = styledInput();
    const signIn = bottomDiv();
    const links = styledLink();

    return (
        <Fragment>
            <div className={page.root}>
                <div>
                    <img src={Apple} alt='Happy Apple' className={images.root} />
                    <img src={Pear} alt='Happy pear' className={images.root} />
                    <img src={Potatoes} alt='Happy Potatoe' className={images.root} />
                </div>


                <form onSubmit={handleSubmit} className={forms.root}>

                    <input
                        type='text'
                        className={inputs.root}
                        name='username'
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        className={inputs.root}
                        name='password'
                        placeholder='Password'
                        value={newUser.password}
                        onChange={handleChange}
                    />

                    <Button type='submit' variant="contained" color="primary">Sign Up</Button>
                </form>

                <div className={signIn.root}>
                    <h3 style={{ color: '#DB5461', fontWeight: 'bold' }}>Already have an account?</h3>
                    <Link to='/api/auth/login' className={links.root}>Sign In</Link>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { register })(Register);