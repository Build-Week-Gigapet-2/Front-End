import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editFood } from '../../Actions/Food';

function EditFood(props) {
    const [food, setFood] = useState({
        name: '',
        category_id: 0,
        date: '',
        quantity: '',
        unit_measurement: ''
    })

    const handleChange = (event) => {
        setFood({
            ...food,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.editFood(props.food)    
        props.history.push(`/api/food/:id`)
    }

    return (
        <div className='edit-card'>
            <form onSubmit={handleSubmit} className='edit-form'>
                <h1>Update Food</h1>
                <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Title'
                    value={food.name}
                    onChange={handleChange}
                />

                <label>Date</label>
                <input 
                    type='text'
                    name='date'
                    placeholder='Date'
                    value={food.date}
                    onChange={handleChange}
                />

                <label>Quantity</label>
                <input 
                    type='text'
                    name='quantity'
                    placeholder='Quantity'
                    value={food.quantity}
                    onChange={handleChange}
                />

                <label>Unit of Measurement</label>
                <input 
                    type='text'
                    name='unit_measurement'
                    placeholder='Unit of Measurement'
                    value={food.unit_measurement}
                    onChange={handleChange}
                />

                <select onChange={handleChange}>
                    <option  value={food.category_id=1}>Fruit</option>
                    <option value={food.category_id=2}>Vegetable</option>
                    <option  value={food.category_id=3}>Whole Grains</option>
                    <option  value={food.category_id=4}>Meat</option>
                    <option value={food.category_id=5}>Dairy</option>
                    <option  value={food.category_id=6}>Fats & Oils</option>
                    <option  value={food.category_id=7}>Treats</option>
                </select>

                <button className='save'>Save Changes</button>
            </form>
        </div>
    )
}

const mapStateToProps = ({ foodReducer }) => ({
    food: foodReducer.food
})

export default connect(mapStateToProps, { editFood })(EditFood)