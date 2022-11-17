import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories";
import "./Story.css";
import { getLikeStory, likeStory, deleteLikeStory } from "../../store/likeStory";
import { getComments } from "../../store/comment";
import RichEditor2 from "../editor/RichEditor2";
import { Editor, EditorState, convertFromRaw } from "draft-js";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.storyDetails);
  const body = useSelector((state) => [state.storyDetails.body]);
  const commentsObj = useSelector((state) => state.comment.allComments);
  const comments = Object.values(commentsObj);
  const storyId = Number(useLocation().pathname.split("/")[2]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  }, [dispatch]);

  // if (story.body) {
  //   setBody("this")
  // }

  const { id } = useParams();
  const likes = useSelector((state) => state.likeStory);
  const likeInfo = likes[id];
  const allLikeUser = likeInfo?.allUser;
  const [isUpdate, setIsUpdate] = useState(false);

  if (allLikeUser === undefined) {
    dispatch(getLikeStory(id));
  }
  
  const btn = document.getElementById("likeClickBt");
  btn === null ? dispatch(getLikeStory(id)) :
  btn.style.backgroundColor = "gray"
// useEffect(()=>{
//   if (allLikeUser?.find((id) => id === user.id)){
//     console.log("all like users inside",allLikeUser)
//     btn === null ? dispatch(getLikeStory(id)) :
//     btn.style.backgroundColor = "#3895D3";
//     console.log("this is working")
//   }
// },[isUpdate])
   useEffect(() => {
    dispatch(getLikeStory(id)) 

    },[dispatch, isUpdate]);

  if (allLikeUser?.find((id) => id === user.id)){
    btn === null ? dispatch(getLikeStory(id)) :
    btn.style.backgroundColor = "#3895D3";
    console.log("after btcolor gray")
    console.log("this is working")
  }
  
  const clickLike = (e) => {
    e.preventDefault();

    if (allLikeUser?.find((id) => id === user.id)) {
      btn === null ? dispatch(getLikeStory(id)) :
      btn.style.backgroundColor = "gray"
      dispatch(deleteLikeStory(id))
      dispatch(getLikeStory(id))
    } else {
      dispatch(likeStory(id))
      btn === null ? dispatch(getLikeStory(id)) :
      btn.style.backgroundColor = "#3895D3";
    }
    dispatch(getLikeStory(id))
    setIsUpdate(true)
  };
 
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    console.log("opening");
  };

  useEffect(() => {
    const closeMenu = () => {
      if (!showMenu) return;
      setShowMenu(false);
      console.log("closing");
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    dispatch(getComments(story.id));
  }, [dispatch]);

  const deleteStory = async () => {
    await dispatch(storyActions.fetchDeleteStory(storyId));
    await dispatch(storyDetailsActions.deleteStoryDetails());
    history.push("/stories");
  };


  return (
    <div>
      <SideBar />
      <div className="flexCol centerCol">
        <div className="width700">
          <div className="">
            <div className="flexRow centerRow centerCol">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="Profile"
                className="profileImage"
              ></img>
              <h4>{story?.User?.username}</h4>
              {story.User?.id === user?.id && (
                <div className="flexRow flexEnd">
                  <button
                    onClick={() => history.push(`/stories/${story.id}/edit`)}
                  >
                    Edit
                  </button>
                  <button onClick={deleteStory}>Delete</button>
                </div>
              )}
              <button id="likeClickBt" onClick={clickLike}>
                Like
              </button>{" "}
              {likeInfo?.num}
            </div>
            <h2 className="titlePadding">{story?.title}</h2>
            <div>
              {body[0] &&
                body.map((el) => {
                  const contentState = convertFromRaw(JSON.parse(el));
                  const editorState =
                    EditorState.createWithContent(contentState);
                  return (
                      <RichEditor2 editorState={editorState} readOnly={true} />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="comments">
          {showMenu && (
            <div class="comments-sidebar">
              <div className="comments-headline">
                <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt="Profile"
                className="profileImage"
              ></img><h2>{user?.username}</h2>
              </div>
              <textarea className="textarea-comments"></textarea>
              {comments?.map((comment) => (
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt="Profile"
                    className="profileImage"
                  ></img>
                  {comment.body}
                </div>
              ))}
            </div>
          )}
        </div>
        <div onClick={openMenu} className="comment-icon">
          <i class="fa-regular fa-comment"></i>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
