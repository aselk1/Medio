import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import SideBar from "../SideBar";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories";
import "./Story.css";
import { getLikeStory, likeStory } from "../../store/likeStory";
import { getComments } from "../../store/comment";










import CommentForm from "./CommentForm";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.storyDetails);
  const commentsObj = useSelector((state) => state.comment.allComments);
  const comments = Object.values(commentsObj);
  const storyId = Number(useLocation().pathname.split("/")[2]);

  const [showMenu, setShowMenu] = useState(false);

  const { id } = useParams();
  const likes = useSelector((state) => state.likeStory);
  const likeInfo = likes[id];
  const allLikeUser = likeInfo?.allUser;

  useEffect(() => {
    dispatch(getLikeStory(id));
  }, [dispatch]);

  if (allLikeUser === undefined) {
    dispatch(getLikeStory(id));
  }

  let clicked = allLikeUser?.find((id) => id === user.id);

  if (clicked) {
    const btn = document.getElementById("likeClickBt");
    btn === null ? dispatch(getLikeStory(id)) :
    btn.style.backgroundColor = "#3895D3";
  }

  const clickLike = (e) => {
    e.preventDefault();
    allLikeUser?.find((id) => id === user.id)
      ? alert("you already clicked")
      : dispatch(likeStory(id));
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

  useEffect(() => {
    dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  }, [dispatch]);

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
            <p>{story?.body}</p>
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
              <div className="textarea-comments"><CommentForm /></div>
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
