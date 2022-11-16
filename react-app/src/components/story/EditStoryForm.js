import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as storyActions from "../../store/stories";

const StoryForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(storyActions.fetchAllStories());
  }, [dispatch]);


  const postStory = async (e) => {
    e.preventDefault();
    setErrors([]);
    const story = { title, body };
    await dispatch(storyActions.fetchPostStory(story)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(Object.values(data.errors));
      }
    });
    history.push("/stories");
  };

  return (
    <div className="center flexCol">
      <form className="flexCol center" onSubmit={postStory}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <textarea
            className="noResize width700 fontSize42 heightFitContent"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div>
          <h3>
            <textarea
              className="noResize width700 fontSize21"
              name="body"
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </h3>
        </div>
        <button type="submit">Add Story</button>
      </form>
    </div>
  );
};

export default StoryForm;
