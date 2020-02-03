import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Button
} from '@material-ui/core';

export default function Footer() {
    return (
        <div>
            <AppBar position="static" style={{marginTop: '100px', background: '#606FC7'}}>
                <Toolbar>
                    <Container>
                        <Typography variant="p" component="p">
                            Copyright @2020 Gigapet
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}
