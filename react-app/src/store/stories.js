import { csrfFetch } from "./csrf";

const POST_STORY = "stories/POST_STORY";
const GET_STORIES = "stories/GET_STORIES";

const postStory = (story) => ({
  type: POST_STORY,
  payload: story,
});

const getStories = (stories) => ({
  type: GET_STORIES,
  payload: stories,
});

export const fetchAllStories = () => async (dispatch) => {
  const response = await fetch("/api/stories");
  if (response.ok) {
    const stories = await response.json();
    dispatch(getStories(stories.data));
    return response;
  }
};

export const fetchPostStory = (story) => async (dispatch) => {
  console.log("working");
  const { title, body } = story;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("body", body);
  const response = await csrfFetch("/api/stories", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  if (response.ok) {
    const story = await response.json();
    dispatch(postStory(story));
    return response;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_STORIES:
      newState = action.payload;
      return newState;
    case POST_STORY:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
