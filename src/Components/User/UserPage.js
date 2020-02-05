import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';

export default function UserPage() {
    return (
        <div>
            <p>User's Page</p>
            <FoodForm />
            <FoodGraph />
        </div>
    )
}
