import axios from 'axios'

export function getToken() {
    return JSON.parse(localStorage.getItem('token'))
}

export default function AxiosWithAuth() {
    return axios.create({
        baseURL: 'https://gigapets2.herokuapp.com/',
        headers: {
            Authorization: getToken()
        }
    })
}