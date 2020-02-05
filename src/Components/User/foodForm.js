import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Actions/Food'

const FoodForm = ({setFormState, setId, actions}) => {
    const [food, setFood] = useState({
        name: '',
        category_id: 0,
        date: '',
        quantity: '',
        unit_measurement: ''
    })

    // const [category, setCategory] = useState({
    //     category_id: '',
    // })

    const handleChange = e => {
        setFood({
           
            ...food,
            [e.target.name]: e.target.value

        })
        console.log(e.target.value)
    }

    // const makeChange = e => {
    //     setCategory({
    //         ...category,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const toggle = e => {
    //     setFood({
    //         ...food,
    //         private: !food.private
    //     })
    // }

    const handleSubmit = e => {
        e.preventDefault()
        actions.addFood(food, setId)
       

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' defaultValue={food.name} onChange={handleChange} />
            <input type='text' name='date' placeholder='Date' defaultValue={food.date} onChange={handleChange} />
            <input type='text' name='quantity' placeholder='Quantity' defaultValue={food.quantity} onChange={handleChange} />
            <input type='text' name='unit_measurement' placeholder='Unit of Measurement' Value={food.unit_measurement} onChange={handleChange} />
           
            <select onChange={handleChange}>
                <option  value={food.category_id=1}>Fruit</option>
                <option value={food.category_id=2}>Vegetable</option>
                <option  value={food.category_id=3}>Whole Grains</option>
                <option  value={food.category_id=4}>Meat</option>
                <option value={food.category_id=5}>Dairy</option>
                <option  value={food.category_id=6}>Fats & Oils</option>
                <option  value={food.category_id=7}>Treats</option>
            </select>
            <button type='submit'>Submit Food</button>
        </form>
    )
}

  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(FoodForm);