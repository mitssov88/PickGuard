import * as api from '../api/index.js';

export const signin = (signinData, history) => async (dispatch) => {
    try {      
        const { data } = await api.signIn(signinData);
        dispatch({type: "AUTH", payload: data});
        history.push('/home')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (signupData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(signupData);
        dispatch({type: "AUTH", payload: data});
        history.push('/home');
    } catch (error) {
        console.log(error)
    }
}
