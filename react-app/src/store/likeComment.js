import { csrfFetch } from './csrf';

const ADD_ONE = 'like_comment/ADD_ONE';
const DELETE = 'like_comment/DELETE';
const READ = 'like_comment/LOAD';

const read = numLike => ({
    type: READ,
    numLike
});

const addOne = numLike => ({
    type: ADD_ONE,
    numLike
});

const deleteLike = storyId => ({
    type: DELETE,
    storyId
});

export const getLikeComment =commentId =>async dispatch =>{
    const response = await csrfFetch(`/api/comments/${commentId}/likes`)

    if (response.ok) {
        const numLike = await response.json();

        dispatch(read(numLike));
        return numLike;
    };
}


export const likeComment = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${storyId}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body is neccessary?
        body: JSON.stringify(storyId)
    });
    const numLike = await response.json();
    dispatch(addOne(numLike));
    return numLike;
}

export const deleteLikeComment = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/comments/${storyId}/likes`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteLike(storyId));
    }
};

export const likeCommentReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case READ:
            newState[action.numLike.comment_id] = action.numLike;
            return newState;
        case ADD_ONE:
            newState[action.numLike.comment_id] = action.numLike;
            return newState;
        case DELETE:
            delete newState[action.numLike.comment_id]
            return newState;
        default:
            return state;
    }
}

export default likeCommentReducer