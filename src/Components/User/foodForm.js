import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Actions/Food'

const FoodForm = ({setFormState, setId, actions}) => {
    const [food, setFood] = useState({
        name: '',
        category_id: '',
        date: '',
    })
    const handleChange = e => {
        setFood({
            ...food,
            [e.target.name]: e.target.value

        })
    }

    // const toggle = e => {
    //     setFood({
    //         ...food,
    //         private: !food.private
    //     })
    // }

    const handleSubmit = e => {
        e.preventDefault()
        actions.addFood(food, setId)
        setFormState({
            renderFoodForm: false,
           
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' value={food.name} onChange={handleChange} />
            {/* <input type='text' name='category' placeholder='Category' value={food.category_id} onChange={handleChange} /> */}
            <select>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Whole Grains">Whole Grains</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Fats & Oils">Fats & Oils</option>
                <option value="Treats">Treats</option>
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