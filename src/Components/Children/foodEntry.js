import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFood, deleteFood } from '../../Actions/Food';
import { connect } from 'react-redux';


const FoodEntry = (props) => {

    const handleDelete = (e) => {
        console.log('Handle Delete')
        e.preventDefault();
        props.deleteFood(props.food);
    }

    return (
        <div className="card">
            <div className="header">
                <div className="homebutton">
                   <button> <Link to='/'>
                        Home
                    </Link></button>
                    <button><Link to='/api/users/:id/children'/>Add Food</button>
                </div>
            </div>
            
            <div className="text">
                <h4 className="foodentry">
                Name: {props.name}
                </h4>
                <p>Date: {props.date}</p>
                <p>Category: {props.category_id}</p>
                <p>Quantity: {props.quantity}</p>
                <p>Unit of Measurement: {props.unit_measurement}</p>
                <button><Link to='/api/food/:id'>View Food</Link></button>
                <button><Link to='/api/food/:id'>Edit Food</Link></button>
                <button className="btn" onClick={handleDelete}>Delete</button>
        </div>

        {/* <Link to='/' className="btn">Let's Eat!</Link> */}
        </div>
    )
}

const mapStateToProps = ({ foodReducer }) => ({
    // loading: childReducer.loading,
    allFood: foodReducer.allFood
})

export default connect(mapStateToProps, { getAllFood, deleteFood })(FoodEntry);
// export default Child;