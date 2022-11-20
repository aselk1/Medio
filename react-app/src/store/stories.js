import { csrfFetch } from "./csrf";
import Cookies from "js-cookie";

const POST_STORY = "stories/POST_STORY";
const EDIT_STORY = "stories/EDIT_STORY";
const GET_STORIES = "stories/GET_STORIES";
const DELETE_STORY = "stories/DELETE_STORY"

const postStory = (story) => ({
  type: POST_STORY,
  payload: story,
});

const editStory = (story) => ({
  type: EDIT_STORY,
  payload: story
});

const getStories = (stories) => ({
  type: GET_STORIES,
  payload: stories,
});

const deleteStory = (id) => ({
  type: DELETE_STORY,
  payload: id
});

export const fetchAllStories = () => async (dispatch) => {
  const response = await fetch("/api/stories");
  if (response.ok) {
    const stories = await response.json();
    dispatch(getStories(stories));
    return stories;
  }
};

export const fetchPostStory = (story) => async (dispatch) => {
  const { title, body } = story;
  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("body", body);
  const response = await fetch("/api/stories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(story),
  });
  if (response.ok) {
    const story = await response.json();
    dispatch(postStory(story));
    return response;
  }
};

export const fetchEditStory = (id, story) => async (dispatch) => {
  console.log(story)
  const { newTitle, newBody } = story;
  // const formData = new FormData();
  // formData.append("title", newTitle);
  // formData.append("body", newBody);
  const res = await fetch(`/api/stories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(story)
  });
  if (res.ok) {
    const data = await res.json()
    dispatch(editStory(data))
    return data
  }
}

export const fetchDeleteStory = (id) => async (dispatch) => {
  const response = await fetch(`/api/stories/${id}`, {
    method: "DELETE",
  });
  console.log(response)
  if (response.ok) {
    dispatch(deleteStory(id))
    return response
  }
}

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
    case EDIT_STORY:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_STORY:
      newState = Object.assign({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}
