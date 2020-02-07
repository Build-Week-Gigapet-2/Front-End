import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';
import { Link } from 'react-router-dom';
import ChildCard from '../Children/childCard';
import ChildPage from '../User/ChildPage';
import FoodItem from '../Children/foodItem';
import { makeStyles } from '@material-ui/core/styles';
import Vegetables from './Images/vegetables.png';


export default function UserPage() {

    const pageStyle = makeStyles({
        root: {
            backgroundImage: `url(${Vegetables})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '100%',
            backgroundBlendMode: 'lighten',
        }
    })

    const styledFonts = makeStyles({
        root:{
            fontSize: '2rem',
            opacity: '2'
        }
    })

    const styles = styledFonts();
    const page = pageStyle();
    
    return (
        <div className={page.root}>
            <h2 className={styles.root}>All Children</h2>
            <ChildCard />
            <h2 className={styles.root}>All Food</h2>
            <FoodItem />
            <h2 className={styles.root}>Something Missing? Add More Food!</h2>
            <FoodForm />
            <h2 className={styles.root}>What's the Intake look like?</h2>
            <FoodGraph />
        </div>
    )
}
