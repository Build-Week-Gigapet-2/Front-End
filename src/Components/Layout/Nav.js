import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

function Nav()
{

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
                            {
                                /*
                                    TODO:

                                    Change menu buttons when user logs-in
                                    - add username text
                                    - add logout button
                                */
                            }
                            <Button color='inherit' className={classes.buttonSpacing}>Login</Button>
                            <Button color='inherit' className={classes.buttonSpacing}>Sign Up</Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Nav;
