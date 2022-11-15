import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storyActions from "../store/stories";

const StoryForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storyActions.fetchAllStories());
  }, [dispatch]);

  const postStory = (e) => {
    e.preventDefault();
    setErrors([]);
    const story = { title, body };
    return dispatch(storyActions.fetchPostStory(story)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(Object.values(data.errors));
      }
    });
  };

  return (
    <form onSubmit={postStory}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          name="body"
          type="test"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Story</button>
      </div>
    </form>
  );
};

export default StoryForm;
