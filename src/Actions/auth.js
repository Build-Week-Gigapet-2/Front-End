import { userConstants } from '../Actions/types';
import axios from 'axios';

export const login = userInfo => dispatch => {
    console.log(userInfo, 'userInfo in login action')
    dispatch({ type: userConstants.LOGIN_REQUEST });

    axios.post('https://gigapets2.herokuapp.com/api/auth/login', userInfo)
        .then((res) => {
            console.log(res.data, 'res.data in login action')
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: userConstants.LOGIN_SUCCESS });
        })
        .catch((err) =>{
            console.log(err.response)
            dispatch({ type: userConstants.LOGIN_FAILURE })
        })
}

export const logout = () => dispatch => {
    console.log('something')
    localStorage.removeItem('token')
    dispatch({ type: userConstants.LOGOUT })
}

export const register = newUser => dispatch => {
    console.log(newUser, 'newUser in register action')
    dispatch({ type: userConstants.REGISTER_USER });

    axios.post('https://gigapets2.herokuapp.com/api/auth/login', newUser)
        .then(res =>{
            localStorage.setItem('token', JSON.stringify(res.data.token))
            dispatch({ type: userConstants.REGISTER_SUCCESS });
            console.log(res.data)
        })
        .catch((err) =>{
            dispatch({ type: userConstants.REGISTER_FAILURE })
            console.log(err.response)
        })
}