import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFood, deleteFood } from '../../Actions/Food';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const FoodEntry = (props) => {

    const handleDelete = (e) => {
        console.log('Handle Delete')
        // e.preventDefault();
        props.deleteFood(props.food);
    }

    const styledHeader = makeStyles({
        root:{
            fontSize: '1.5rem',
            
        }
    })

    const styledPar = makeStyles({
        root:{
            fontSize: '1.2rem'
        }
    })

    const styles = styledHeader();
    const parStyle = styledPar();

    return (
        <div className="foodcard">
           
            <div className="text">
                <h4 className="foodname">
                Name: {props.name}
                </h4>
                {/* <p className="foodp">Date: {props.date}</p> */}
                <p className="foodp">Category: {props.category_id}</p>
                <p className="foodp">Quantity: {props.quantity}</p>
                <p className="foodp">Unit of Measurement: {props.unit_measurement}</p>
            <div className="foodbuttons">
                <Button size="small" color="primary" variant="outlined"><Link to='/api/food/:id'>View Food</Link></Button>
                <Button size="small" color="primary" variant="outlined"><Link to='/api/food/:id'>Edit Food</Link></Button>
                <Button size="small" color="primary" variant="outlined" className="btn" onClick={()=>handleDelete(props.id)}>Delete</Button>
            </div>
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