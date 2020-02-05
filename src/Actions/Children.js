import AxiosWithAuth from '../Utils/AxiosWithAuth';

export const FETCH_CHILD_REQUEST = 'FETCH_CHILD_REQUEST'
export const FETCH_CHILD_SUCCESS = 'FETCH_CHILD_SUCCESS';
export const FETCH_CHILD_FAILURE = 'FETCH_CHILD_FAILURE';

export const FETCH_ALL_CHILDREN_REQUEST = 'FETCH_ALL_CHILDREN_REQUEST';
export const FETCH_ALL_CHILDREN_SUCCESS = 'FETCH_ALL_CHILDREN_SUCCESS';
export const FETCH_ALL_CHILDREN_FAILURE = 'FETCH_ALL_CHILDREN_FAILURE';

export const ADD_CHILD_SUCCESS = 'ADD_CHILD_SUCCESS';
export const ADD_CHILD_FAILURE = 'ADD_CHILD_FAILURE';

export const EDIT_CHILD_SUCCESS = 'EDIT_CHILD_SUCCESS';
export const EDIT_CHILD_FAILURE = 'EDIT_CHILD_FAILURE'

export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS';
export const DELETE_CHILD_FAILURE = 'DELETE_CHILD_FAILURE';

export const SET_LOADING = 'SET_LOADING';

export const getAllChildren = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_ALL_CHILDREN_REQUEST })

        AxiosWithAuth().get(`/api/users/:id/children`)
            .then(res =>{
            console.log(res.data)
        dispatch({ type: FETCH_ALL_CHILDREN_SUCCESS,
                    payload: res.data
        })
    })
    .catch(error => {
        dispatch({ type: FETCH_ALL_CHILDREN_FAILURE })
    });
}

export const getUserChild = () => dispatch => {
    console.log('dispatch?')
    dispatch({ type: FETCH_CHILD_REQUEST })
        AxiosWithAuth().get(`/api/users/:id/children/:id`)
            .then(res =>{
                console.log(res.data, '<- Data in childfetch dispatch')
                dispatch({
                    type: FETCH_CHILD_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: FETCH_CHILD_FAILURE,
                    error: err.response.data.message
                })
            })
}

export const addChild = (child) => dispatch => {
    AxiosWithAuth().post('/api/users/:id/children', child)
    .then(res => {
        dispatch({ 
            type: ADD_CHILD_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_CHILD_FAILURE,
            error: err.response.data.message
        })
    })
}

export const editChild = (child) => dispatch => {
    AxiosWithAuth().put(`/api/users/:id/children/${child.id}`, child)
    .then(res => {
        dispatch({ 
            type: EDIT_CHILD_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: EDIT_CHILD_FAILURE,
            error: err.response.data.message
        })
    })
}

export const deleteChild = (child) => dispatch => {
    console.log('delete dispatch')
    AxiosWithAuth().delete(`/api/users/:id/children/${child.id}`)
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type: DELETE_CHILD_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: DELETE_CHILD_FAILURE,
                error: err.response.data.message
            })
        })
}


export const actionCreators = {
    getUserChild,
    addChild,
    deleteChild,
}