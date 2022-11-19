import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import RichEditor2 from "../editor/RichEditor2";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "./Story.css";

const EditStoryForm = () => {
  const story = useSelector((state) => state.storyDetails);
  const title = useSelector((state) => state.storyDetails.title);
  const [newTitle, setNewTitle] = useState("");
  const body = useSelector((state) => state.storyDetails.body);
  const [newBody, setNewBody] = useState("");
  const [errors, setErrors] = useState([]);
  const user = useSelector((state) => state.session.user);
  const [editorState, setEditorState] = useState(() => {
      return EditorState.createEmpty();
  });
  const storyId = Number(useLocation().pathname.split("/")[2]);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
      dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  }, [dispatch]);

  useEffect(() => {
    if(body)
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(body))))
  }, [dispatch, story]);


  useEffect(() => {
      setNewBody(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
      setNewTitle(newTitle || title)
  }, [editorState]);

  // useEffect(() => {
  //   console.log("did it");
  // }, [newTitle]);

  const editStory = async (e) => {
    e.preventDefault();
    setErrors([]);
    const editStory = { title: newTitle, body: newBody };
    console.log(editStory)
    let data = await dispatch(
      storyActions.fetchEditStory(story.id, editStory)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(Object.values(data.errors));
      }
    });
    // // await dispatch(storyDetailsActions.editStoryDetails(data))
    history.push(`/stories/${story.id}`);
  };

  return (
    <div className="flexRow">
      <SideBar />
      <div className="centerCol flexCol">
        <form className="flexCol centerCol" onSubmit={editStory}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            {title && (
              <textarea
                className="noResize width700 fontSize42 heightFitContent"
                name="title"
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required={true}
              ></textarea>
            )}
          </div>
          <div>
            {/* <h3>
            <textarea
              className="noResize width700 fontSize21"
              name="body"
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </h3> */}
            <div className="width700">
              <RichEditor2
                editorState={editorState}
                readOnly={false}
                setEditorState={setEditorState}
              />
              {/* body.map((el) => {
                  const contentState = convertFromRaw(JSON.parse(el));
                  const editorState =
                    EditorState.createWithContent(contentState);
                  return (
                  );
                }) */}
            </div>
          </div>
          <button type="submit">Edit Story</button>
        </form>
      </div>
    </div>
  );
};

export default EditStoryForm;
