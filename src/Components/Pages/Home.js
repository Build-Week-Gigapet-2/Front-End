import React from 'react';
import { Typography } from '@material-ui/core';

import FoodForm from '../User/foodForm';

export default function Home() {
    return (
        <div>
            <Typography variant="h1" component="h1">
                Welcome to <strong>Gigapet</strong>
                
            </Typography>
            <FoodForm />
        </div>
    )
}
