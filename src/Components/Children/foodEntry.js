import React from 'react';
import { Link } from 'react-router-dom';
import { getAllFood, deleteFood } from '../../Actions/Food';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const FoodEntry = (props) => {

    const handleDelete = (e) => {
        console.log('Handle Delete')
        e.preventDefault();
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
        <div className="card">
            <div className="header">
               
            </div>
            
            <div className="text">
                <h4 className={styles.root}>
                Name: {props.name}
                </h4>
                <p className={parStyle.root}>Date: {props.date}</p>
                <p className={parStyle.root}>Category: {props.category_id}</p>
                <p className={parStyle.root}>Quantity: {props.quantity}</p>
                <p className={parStyle.root}>Unit of Measurement: {props.unit_measurement}</p>
                <Button size="small" color="primary" variant="outlined"><Link to='/api/food/:id'>View Food</Link></Button>
                <Button size="small" color="primary" variant="outlined"><Link to='/api/food/:id'>Edit Food</Link></Button>
                <Button size="small" color="primary" variant="outlined" className="btn" onClick={handleDelete}>Delete</Button>
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