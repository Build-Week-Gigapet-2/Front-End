import React from 'react';
import { Link } from 'react-router-dom';

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
        
               
        </div>

        {/* <Link to='/' className="btn">Let's Eat!</Link> */}
        </div>
    )
}

export default Child;