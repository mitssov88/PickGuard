const learnedReducer = (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload.id);
        default:
            return posts;
    }
}

export default learnedReducer;