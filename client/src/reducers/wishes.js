const wishesReducer = (wishes = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_WISHES':
            return action.payload;
        case 'CREATE_WISH':
            return [...wishes, action.payload];
        case 'DELETE_WISH':
            return wishes.filter((wish) => wish._id !== action.payload.id);
        default:
            return wishes;
    }
}

export default wishesReducer;