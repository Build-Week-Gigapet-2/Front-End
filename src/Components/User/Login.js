import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Actions/auth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fruits from './Images/fruits.png';
import Eggplant from './Images/eggplant.png';
import Dino from './Images/dinosaur.png';
import Background from './Images/Background.jpg';


function Login(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        user_id: 0,
    })
    console.log(userData);

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

    // Styling Begins here

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

    // const styledInput = makeStyles({
    //     root: {
    //         margin: '10px 0',
    //         backgroundColor: 'white',
    //         borderRadius: 3,
    //     }
    // });

    // const imageStyle = makeStyles({
    //     root: {
    //         height: "15vh",
    //         padding: "120px 120px",
    //         position: 'relative',
    //     }
    // });

    // const bottomDiv = makeStyles({
    //     root: {
    //         padding: '0 26vw'
    //     }
    // })

    // const styledLink = makeStyles({
    //     root: {
    //         textDecoration: 'none',
    //         fontSize: '20px',
    //         color: 'white',
    //         border: '1px solid #DB5461',
    //         padding: '5px 55px',
    //         marginLeft: '1vw',
    //         borderRadius: 3,
    //         backgroundColor: '#DB5461'
    //     }
    // })

    const page = pageStyle();
    // const images = imageStyle();
    const forms = styledForm();
    // const inputs = styledInput();
    // const signUp = bottomDiv();
    // const links = styledLink();



    return (
        <Fragment >
            <div className={page.root}>
                <div>
                    <img src={Dino} alt='Happy Alien' className="dino"/>
                </div>

                <form onSubmit={handleSubmit} className={forms.root}>
                    <input
                        type='text'
                        className="logininput"
                        name='username'
                        placeholder='Username'
                        value={userData.username}
                        onChange={handleChange}
                    />
                    <input
                        type='password'
                        className="logininput"
                        name='password'
                        placeholder='Password'
                        value={userData.password}
                        onChange={handleChange}
                    />

                    <Button type='submit' variant="contained" color="primary" className="loginbutton">Sign In</Button>
                </form>

                <img src={Eggplant} alt='Happy Eggplant' className="eggplant" />

                <div className="signup">
                    <h3 style={{ color: '#DB5461' }}>Don't have an account?</h3>
                    <Link to='/api/auth/register' className="signbutton" >Sign Up</Link>
                </div>
                <img src={Fruits} alt='Assortment of Fruit' className="fruit" />
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { login })(Login);
