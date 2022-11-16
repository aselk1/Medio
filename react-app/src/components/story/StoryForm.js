import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as storyActions from "../../store/stories";
import SideBar from "../SideBar";

const StoryForm = () => {
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  // const ref = useRef(null)
  // let titleDiv = <span>Title</span>;

  useEffect(() => {
    dispatch(storyActions.fetchAllStories());
  }, [dispatch]);

  // useEffect (() => {
  //   const handleChange = (e) => {
  //     if (title === "") {
  //       titleDiv = <span>Title</span>;
  //     }
  //     console.log(title)
  //     setTitle(e.target.value)
  //   }
  //   ref.current.addEventListener('change', handleChange);
  //   return () => {
  //     ref.current.removeEventListener("change", handleChange);
  //   }
  // },[title])

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
    <div>
      <SideBar />
      <div className="centerCol flexCol">
        <form className="flexCol centerCol" onSubmit={postStory}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            {/* <label htmlFor="title">Title</label> */}
            {/* <h3
            contentEditable
            className="noResize width700 fontSize42 heightFitContent"
            id="titleHeader"
            // name="title"
            // type="text"
            // placeholder="Title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          >
            {titleDiv}
          </h3> */}
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
            {/* <label htmlFor="body">Body</label> */}
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
    </div>
  );
};

export default StoryForm;
