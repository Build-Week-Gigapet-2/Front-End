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
                            <Button color='inherit' className={classes.buttonSpacing}> <Link to='/'  >Home</Link></Button>
                             <Button color='inherit' className={classes.buttonSpacing}> <Link to='/api/auth/login'>Login</Link></Button>
                           <Button color='inherit' className={classes.buttonSpacing}> <Link to='/api/auth/register'>Sign Up</Link></Button>
                            
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Nav;
