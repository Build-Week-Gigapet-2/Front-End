import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../Actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Apple from './Images/apple.png';
import Pear from './Images/pear.png';
import Potatoes from './Images/potatoes.png';

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
          padding: "0 240px",
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
            color: 'blue'
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

            <div className="reg">
                <h3>Already have an account?</h3>
                <Link to='/api/auth/login' className={links.root}>Sign In</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    user: authReducer.user
})

export default connect(mapStateToProps, { register })(Register);