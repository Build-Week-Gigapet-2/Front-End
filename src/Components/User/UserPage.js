import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';
import { Link } from 'react-router-dom';
import ChildCard from '../Children/childCard';
import ChildPage from '../User/ChildPage';
import FoodItem from '../Children/foodItem';
import { makeStyles } from '@material-ui/core/styles';

export default function UserPage()
{
    const styles = makeStyles({
        coverImage: {
            position: 'relative',
            height: '500px',
            overflow: 'hidden',
            margin: '50px 0',
            backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        },
        text: {
            fontSize: '2rem',
            opacity: '2'
        }
    })();

    return (
        <div>
            
            <div className={styles.coverImage}></div>
            <section className="userpage">
            <h2 className={styles.text}>All Children</h2>
            <ChildCard />
            <h2 className={styles.text}>All Food</h2>
            <FoodItem />
            <h2 className={styles.text}>Something Missing? Add More Food!</h2>
            <FoodForm />
            <h2 className={styles.text}>What's the Intake look like?</h2>
            <FoodGraph />
            </section>
        </div>
    )
}
