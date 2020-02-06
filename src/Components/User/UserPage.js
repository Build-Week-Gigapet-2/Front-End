import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';
import { Link } from 'react-router-dom';
import ChildCard from '../Children/childCard';
import ChildPage from '../User/ChildPage';
import FoodItem from '../Children/foodItem';

export default function UserPage(props) {
        console.log(props);
    return (
        <div>
            <p>User's Page</p>
            <h2>All Children</h2>
            <ChildCard />
            <h2>All Food</h2>
            <FoodItem />
            <h2>Something Missing? Add More Food!</h2>
            <FoodForm />
            <h2>What's the Intake look like?</h2>
            <FoodGraph />
        </div>
    )
}
