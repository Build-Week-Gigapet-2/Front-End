import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Actions/Children'

const AddChild = ({setFormState, id, actions, history}) => {
    const [added, setAdded] = useState([])
    const [newChild, setNewChild] = useState({
       child: '',
       user_id: ''
    })

    const handleInstructions = e => {
        setNewChild({
            ...newChild,
            [e.target.name]: e.target.value
        })
    }

    const addChild = e => {
        e.preventDefault()
        let newId = added.length > 0 ? added[added.length-1].id + 1 : 0
        setAdded([
            ...added,
            {
                ...newChild,
                id: newId
            }
        ])
    }

   
    const handleSubmit = e => {
        e.preventDefault()
        actions.addInstructions(added, id)
        // history.push('/userPage')
      
    }

    return (
        <div onSubmit={handleSubmit}>
            <h3>Add New Child</h3>
            
                <div className='newchild'>
                        <input type='text' name='newChild' placeholder='Child Name' onChange={handleInstructions} />
                        <button type='submit' onClick={addChild}>Add Child</button> 
                </div>
             
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddChild);