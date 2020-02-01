import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../Actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Alien from './Images/alien.png';
import Fruits from './Images/fruits.png';
import Eggplant from './Images/eggplant.png';


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

    //Styling Begins here

    const styledForm = makeStyles({
        root: {
          display: "flex",
          flexDirection: 'column',
          padding: '0 45vw',
          margin: '50px 0',
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
          padding: "0 200px",
        }
      });

    const submitButton = makeStyles({
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 25,
          padding: "0 20px",
          margin: '20px 0'
        }
      });

    const styledLink = makeStyles({
        root:{
            textDecoration: 'none',
            fontSize: '20px',
            
        }
    })


    const button = submitButton();
    const images = imageStyle();
    const forms = styledForm();
    const inputs = styledInput();
    const links = styledLink();
    

    return (
        <Fragment>
            <div>
                <img src={Alien} alt='Happy Alien' className={images.root} />
                <img src={Fruits} alt='Assortment of Fruit' className={images.root} />
                <img src={Eggplant} alt='Happy Eggplant' className={images.root} />
            </div>
        
            <form onSubmit={handleSubmit} className={forms.root}>
                <input 
                    type='text'
                    className={inputs.root} 
                    name='username' 
                    placeholder='Username'
                    value={userData.username}
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    className={inputs.root} 
                    name='password' 
                    placeholder='Password'
                    value={userData.password}
                    onChange={handleChange}
                />
            
                <button type='submit' className={button.root}>Sign In</button>
            </form>
            <div className="reg">
                <h3>Don't have an account?</h3>
                <Link to='/api/auth/register' className={links.root} >Sign Up</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { login })(Login);