import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function Home()
{

    //  Styles
    const styles = makeStyles({
        coverImage: {
            position: 'relative',
            height: '500px',
            overflow: 'hidden',
            margin: '50px 0',
            backgroundImage: "url('https://images.unsplash.com/photo-1523472721958-978152f4d69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        },

        text: {
          fontSize: '1.2em',
          textAlign: 'justify',
          lineHeight: '1.6em'
        }
    })();

    return (
        <div className="home">
            <Typography variant="h1" component="h1">
                Welcome to <strong>Gigapet</strong>
            </Typography>
            <Typography variant="h4" component="h4">
                Helping parents track their children's nutrition with an interactive pet
            </Typography>

            <div class={styles.coverImage}></div>

            <Typography className={styles.text} variant="p" component="p">
                Getting our kids to eat healthy can be a daunting task or epic struggle full of chasing, throwing, and straight out refusal.
                With Gigapet, your child can watch their pet grow with every healthy choice they make,
                encouraging them to eat healthier and allowing them the chance to have fun doing it!
            </Typography>
        </div>
    )
}
