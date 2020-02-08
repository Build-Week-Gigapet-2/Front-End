import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editChild } from '../../Actions/Children';
import FoodForm from '../User/foodForm';
import EditFood from '../User/editFood';

function EditChild(props, id) {
    const [child, setChild] = useState({
        child: '',
        user_id: 0,
        child_id:0,
        id: 0
       
    })

   
    const handleChange = (event) => {
        setChild({
            ...child,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.editChild()    
        props.history.push(`/api/users/1/children/1`)
    }

    return (
        <div className='edit-card'>
            <form onSubmit={handleSubmit} className='edit-form'>
                <h1>Update Child</h1>
                <label>Name</label>
                <input 
                    type='text'
                    name='childname'
                    placeholder='Name'
                    defaultValue={child.child}
                    onChange={handleChange}
                />
                <button className='save'>Save Changes</button>
            </form>
            <FoodForm />
            <EditFood />

        </div>
    )
}


const mapStateToProps = ({ childReducer }) => ({
    child: childReducer.child
})

export default connect(mapStateToProps, { editChild })(EditChild)