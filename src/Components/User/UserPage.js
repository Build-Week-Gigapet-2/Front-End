import React from 'react'
import FoodForm from './foodForm';
import FoodGraph from '../Children/foodGraph';
import { Link } from 'react-router-dom';
import ChildCard from '../Children/childCard';
import ChildPage from '../User/ChildPage';
import FoodItem from '../Children/foodItem';
import { makeStyles } from '@material-ui/core/styles';
import Background from './Images/Background.jpg';
import Button from '@material-ui/core/Button';




export default function UserPage(props) {
    // const pageStyle = makeStyles({
    //     root: {
    //         backgroundColor: '#fff',
    //         // height: '100vh',
    //         backgroundImage: `url(${Background})`,
    //         backgroundRepeat: 'repeat',
    //         backgroundSize: '21%',
    //         background: 'rgba(f, f, f, 0.5)'
    //     }
    // })
    
    
    // const page = pageStyle();
    return (
        <div className="userpage">
            <h1>Welcome to Gigapet User Dashboard!</h1>
            <div className="homebutton">
                   <Button className="homebutton" variant="outlined"> <Link to='/'>
                        Home
                    </Link></Button>
                    <Button variant="outlined"><Link to='/api/users/:id/children'/>Add Child</Button>
                </div>
            <h2>All Children</h2>
            <ChildCard />
            <h2>All Food</h2>
            <div className="homebutton">
                   <Button color="primary" variant="outlined"> <Link to='/'>
                        Home
                    </Link></Button>
                    <Button color="primary" variant="outlined"><Link to='/api/users/:id/children'/>Add Food</Button>
                </div>
            <FoodItem />
            <h2>Something Missing? Add More Food!</h2>
            <FoodForm />
            <h2>What's the Intake look like?</h2>
            <FoodGraph />
        </div>
    )
}
