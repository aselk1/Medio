import { csrfFetch } from "./csrf";


const GET_DETAILS = "storyDetails/GET_DETAILS";


const getStoryDetails = (story) => ({
  type: GET_DETAILS,
  payload: story,
});

export const fetchStoryDetails = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/stories/${id}`);
  if (response.ok) {
    const story = await response.json();
    dispatch(getStoryDetails(story));
    return response;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_DETAILS:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}
