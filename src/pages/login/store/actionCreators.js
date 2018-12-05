import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
    type: actionTypes.CHNAGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: actionTypes.LOGOUT,
    value: false
});


export const handleLogin = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&passwrod=${password}`)
            .then((res) => {
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin())
                } else {
                    alert('登录失败');
                }
            }).catch(() => {

        })
    }
};