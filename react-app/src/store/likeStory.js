import { csrfFetch } from './csrf';

const ADD_ONE = 'like_story/ADD_ONE';
const DELETE = 'like_story/DELETE';
const READ = 'like_story/LOAD';

const read = numLike => ({
    type: READ,
    numLike
});

const addOne = numLike => ({
    type: ADD_ONE,
    numLike
});

const deleteLike = story_id => ({
    type: DELETE,
    story_id
});

export const getLikeStory =spotId =>async dispatch =>{
    const response = await csrfFetch(`/api/stories/${spotId}/likes`)

    if (response.ok) {
        const numLike = await response.json();

        dispatch(read(numLike));
        return numLike;
    };
}


export const likeStory = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stories/${storyId}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body is neccessary?
        body: JSON.stringify(storyId)
    });
    const numLike = await response.json();
    dispatch(addOne(numLike));
    return numLike;
}

export const deleteLikeStory = (storyId) => async (dispatch) => {
    const response = await csrfFetch(`/api/stories/${storyId}/likes`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteLike(storyId));
    }
};

export const likeStoryReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case READ:
            newState[action.numLike.story_id] = action.numLike;
            return newState;
        case ADD_ONE:
            newState[action.numLike.story_id] = action.numLike;
            return newState;
        case DELETE:
            delete newState[action.story_id]
            return newState;
        default:
            return state;
    }
}

export default likeStoryReducer