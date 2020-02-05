import React from 'react';
import { Link } from 'react-router-dom';
import { getAllChildren } from '../../Actions/Children';
import { connect } from 'react-redux';

const Child = (props) => {
    return (
        <div className="card">
            <div className="header">
                <div className="homebutton">
                    <Link to='/'>
                        Home
                    </Link>
                </div>
            </div>
            
            <div className="text">
                <h4 className="child">
                Name: {props.name}
                </h4>
                <button><Link to='/api/users/:id/children/:id'>View Child</Link></button>
        </div>

        {/* <Link to='/' className="btn">Let's Eat!</Link> */}
        </div>
    )
}

const mapStateToProps = ({ childReducer }) => ({
    // loading: childReducer.loading,
    allChildren: childReducer.allChildren
})

export default connect(mapStateToProps, { getAllChildren })(Child);
// export default Child;