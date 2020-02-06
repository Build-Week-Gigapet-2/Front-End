import React from 'react';
import { Link } from 'react-router-dom';
import { getAllChildren, deleteChild } from '../../Actions/Children';
import { connect } from 'react-redux';
import AddChild from '../User/addChild';

const Child = (props) => {
    console.log(props)
    const handleDelete = (e) => {
        console.log('Handle Delete')
        e.preventDefault();
        props.deleteChild(props.child);
    }

    return (
        <div className="card">
            <div className="header">
                <div className="homebutton">
                   <button> <Link to='/'>
                        Home
                    </Link></button>
                    <button><Link to='/api/users/:id/children'>Add Child</Link></button>
                </div>
            </div>
            
            <div className="text">
                <h4 className="child">
                Name: {props.name}
                </h4>
                <button><Link to='/api/users/:id/children/:id'>View Child</Link></button>
                <button><Link to='/api/users/:id/children/:id'>Edit Child</Link></button>
                <button className="btn" onClick={handleDelete}>Delete</button>
        </div>

        {/* <Link to='/' className="btn">Let's Eat!</Link> */}
        </div>
    )
}

const mapStateToProps = ({ childReducer }) => ({
    // loading: childReducer.loading,
    allChildren: childReducer.allChildren
})

export default connect(mapStateToProps, { getAllChildren, deleteChild })(Child);
// export default Child;