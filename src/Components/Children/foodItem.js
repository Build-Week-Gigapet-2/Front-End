import React, { useEffect } from 'react';
import FoodEntry from './foodEntry';
import { connect } from 'react-redux';
// import Spinner from '../layout/Spinner';
import { getAllFood } from '../../Actions/Food';

function FoodItem(props){

    // const loading = props.loading;
    

    useEffect(() => {
        setTimeout(() => {
            props.getAllFood()
         }, 500)
    }, [] )

    // if(loading) {
    // return <Spinner />
    // } else {
        console.log(props.allFood);
    return(
            <div>
                    {props.allFood &&
                        props.allFood.map(food =>{
                            return(
                                <FoodEntry 
                                    key={food.id}
                                    name={food.name}
                                    date={food.date}
                                    quantity={food.quantity}
                                    unit_measurement={food.unit_measurement}
                                    category_id={food.category_id} 
                                  />
                            )
                        })
                    }
            </div>
        )
    }


const mapStateToProps = ({ foodReducer }) => ({
    // loading: foodReducer.loading,
    allFood: foodReducer.allFood
})

export default connect(mapStateToProps, { getAllFood })(FoodItem);