import * as api from "../api/index.js";

export const getLearnedPosts = (creatorEmail) => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts(creatorEmail);
        dispatch({type: "FETCH_ALL", payload: data});
    }
    catch (error){
        console.log(error);
    }
}

export const addLearnedPost = (newPost) => async (dispatch) => {
    try{
        const {data} = await api.createPost(newPost)
        dispatch({type: "CREATE", payload: data});
    }
    catch (error){
        console.log(error);
    }
}

export const deleteLearnedPost = (ID) => async (dispatch) => {
    try {
        await api.deletePost(ID);
        dispatch({type: "DELETE", payload: ID});
    } catch (error) {
        console.log(error)
    }
}

// WISHES
export const getWishes = (creatorEmail) => async (dispatch) => {
    try{
        const {data} = await api.fetchWishes(creatorEmail);
        dispatch({type: "FETCH_ALL_WISHES", payload: data});
    }
    catch (error){
        console.log(error);
    }
}

export const addWish = (newWish) => async (dispatch) => {
    try{
        const {data} = await api.creatWish(newWish);
        dispatch({type: "CREATE_WISH", payload: data});
    }
    catch (error){
        console.log(error);
    }
}

export const deleteWish = (ID) => async (dispatch) => {
    try {
        await api.deleteWish(ID);
        dispatch({type: "DELETE_WISH", payload: ID});
    } catch (error) {
        console.log(error)
    }
}