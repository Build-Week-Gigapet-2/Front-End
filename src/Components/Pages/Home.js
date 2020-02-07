import React from 'react';
import { Typography } from '@material-ui/core';


export default function Home() {
    return (
        <div>
            <Typography variant="h1" component="h1">
                Welcome to <strong>Gigapet</strong>
            </Typography>
            <Typography variant="h4" component="h4">
                Helping parents track their children's nutrition with an interactive pet
            </Typography>

            <div class='cover-image'></div>

            <Typography variant="p" component="p">
                Getting our kids to eat healthy can be a daunting task or epic struggle full of chasing, throwing, and straight out refusal.
                With Gigapet, your child can watch their pet grow with every healthy choice they make,
                encouraging them to eat healthier and allowing them the chance to have fun doing it!
            </Typography>
        </div>
    )
}
