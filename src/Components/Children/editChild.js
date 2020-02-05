import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editChild } from '../../Actions/Children';


function EditChild(props) {
    const [child, setChild] = useState({
        child: '',
       
    })

   
    const handleChange = (event) => {
        setChild({
            ...child,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.editChild(props.child)    
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
                    defaultValue={child.name}
                    onChange={handleChange}
                />
                <button className='save'>Save Changes</button>
            </form>

            <h2>Update Food</h2>
        </div>
    )
}

const mapStateToProps = ({ childReducer }) => ({
    child: childReducer.child
})

export default connect(mapStateToProps, { editChild })(EditChild)