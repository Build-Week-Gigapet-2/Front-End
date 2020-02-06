import AxiosWithAuth from '../Utils/AxiosWithAuth';

export const SET_LOADING = 'SET_LOADING';


export const FETCH_FOOD_REQUEST = 'FETCH_FOOD_REQUEST';
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE = 'FETCH_FOOD_FAILURE';

export const FETCH_ALL_REQUEST = 'FETCH_ALL_FOOD_REQUEST';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_FOOD_SUCCESS';
export const FETCH_ALL_FAILURE = 'FETCH_ALL_FOOD_FAILURE';

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export const ADD_FOOD_SUCCESS = 'ADD_FOOD_SUCCESS';
export const ADD_FOOD_FAILURE = 'ADD_FOOD_FAILURE';

export const EDIT_FOOD_SUCCESS = 'EDIT_FOOD_SUCCESS';
export const EDIT_FOOD_FAILURE = 'EDIT_FOOD_FAILURE';

export const DELETE_FOOD_SUCCESS = 'DELETE_FOOD_SUCCESS';
export const DELETE_FOOD_FAILURE = 'DELETE_FOOD_FAILURE';

export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

export const ADD_DATE_SUCCESS = 'ADD_DATE_SUCCESS';
export const ADD_DATE_FAILURE = 'ADD_DATE_FAILURE';

export const getAllFood = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_ALL_REQUEST })

        AxiosWithAuth().get(`/api/food`)
            .then(res =>{
            console.log(res.data)
        dispatch({ type: FETCH_ALL_SUCCESS,
                    payload: res.data
        })
    })
    .catch(error => {
        dispatch({ type: FETCH_ALL_FAILURE })
    });
}

export const getUserFood = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_FOOD_REQUEST })
        AxiosWithAuth().get(`/api/user/:id/children/:id/food`)
            .then(res =>{
                console.log(res.data, '<- Data in fetch dispatch')
                dispatch({
                    type: FETCH_FOOD_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: FETCH_FOOD_FAILURE,
                    error: err.response.data.message
                })
            })
}


export const getFoodCategory = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_CATEGORY_REQUEST })
        AxiosWithAuth().get(`/api/food/c`)
            .then(res =>{
                console.log(res.data, '<- Data in fetch dispatch')
                dispatch({
                    type: FETCH_CATEGORY_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: FETCH_CATEGORY_FAILURE,
                    error: err.response.data.message
                })
            })
}

export const addFood = (food) => dispatch => {
    AxiosWithAuth().post('/api/food', food)
    .then(res => {
        dispatch({ 
            type: ADD_FOOD_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_FOOD_FAILURE,
            error: err.response.data.message
        })
    })
}


export const editFood = (food) => dispatch => {
    AxiosWithAuth().put(`/api/food/${food.id}`, food)
    .then(res => {
        dispatch({ 
            type: EDIT_FOOD_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: EDIT_FOOD_FAILURE,
            error: err.response.data.message
        })
    })
}

export const deleteFood = (food) => dispatch => {
    console.log('delete dispatch')
    AxiosWithAuth().delete(`/api/food/${food.id}`)
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type: DELETE_FOOD_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_FOOD_FAILURE,
                error: err.response.data.message
            })
        })
}

export const setLoading = () => dispatch => {
    console.log('loading dispatch')
    dispatch({ type: SET_LOADING })
}

export const actionCreators = {
    getUserFood,
    addFood,
    deleteFood,
    setLoading
}