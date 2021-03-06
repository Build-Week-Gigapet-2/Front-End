import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Actions/auth';

// Imports for styling
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Button
} from '@material-ui/core';

const Nav = props => {

    const logged = localStorage.getItem('token');


    const handleLogout = () => {
        props.logout();
        props.history.push('/')
      }

const classes = makeStyles(theme => ({
        menuSeparator: {
            justifyContent: 'space-between',
        },
        buttonSpacing: {
            marginLeft: theme.spacing(2),
        },
    }))();

    return (
        <div className='nav-bar'>
            <AppBar position='fixed'>
                <Container>
                    <Toolbar className={classes.menuSeparator}>
                        <Typography variant='h6'>
                            Gigapet
                        </Typography>
                        <div className='nav-items'>
                            <Button color='inherit' className={classes.buttonSpacing}>
                                <Link to='/'>Home</Link>
                            </Button>
                            {logged && <Button color='inherit' className={classes.buttonSpacing}>
                                <Link to='/api/users/:id/'>User Page</Link>
                            </Button>}
                            {!logged && <Button color='inherit' className={classes.buttonSpacing}>
                                <Link to='/api/auth/login'>Login</Link>
                            </Button>}
                            {!logged && <Button color='inherit' className={classes.buttonSpacing}>
                                <Link to='/api/auth/register'>Sign Up</Link>
                            </Button>}
                            {logged && <Button color='inherit' className='logout-btn' onClick={handleLogout}>Logout</Button>}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

const mapStateToProps = ({ authReducer }) => ({
    isLoggedIn: authReducer.isLoggedIn
  })
  
  
  export default connect(mapStateToProps, { logout })(Nav)
  