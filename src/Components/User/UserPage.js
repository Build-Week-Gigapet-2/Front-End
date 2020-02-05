import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';
import { Link } from 'react-router-dom';
import ChildCard from '../Children/childCard';
import ChildPage from '../User/ChildPage';

export default function UserPage() {
    return (
        <div>
            <p>User's Page</p>
            <ChildCard />
          
            <FoodForm />
            <FoodGraph />
        </div>
    )
}
