import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";

const StoryForm = () => {
  const story = useSelector((state) => state.storyDetails);
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState(story.title);
  const [body, setBody] = useState(story.body);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   dispatch(storyActions.fetchAllStories());
  // }, [dispatch]);


  const editStory = async (e) => {
    e.preventDefault();
    setErrors([]);
    const editStory = { title, body };
    let data = await dispatch(storyActions.fetchEditStory(story.id, editStory))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(Object.values(data.errors));
      }
    });
    // await dispatch(storyDetailsActions.editStoryDetails(data))
    history.push(`/stories/${story.id}`);
  };

  return (
    <div className="centerCol flexCol">
      <form className="flexCol centerCol" onSubmit={editStory}>
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
        <button type="submit">Edit Story</button>
      </form>
    </div>
  );
};

export default StoryForm;
