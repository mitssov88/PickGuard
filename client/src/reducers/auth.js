const authReducer = (state = {authData: null}, action) => {
    switch(action.type){
        case 'AUTH':
            const data = action?.payload;
            localStorage.setItem('profile', JSON.stringify( {...data}));
            return {...state, authData: data};
        case 'LOGOUT':
            localStorage.clear();
            return {...state, authData: null};
        default:
            return state;
    }
}

export default authReducer;