import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams, NavLink } from "react-router-dom";
import SideBar from "../SideBar";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories";
import * as followActions from '../../store/follower'
import "./Story.css";
import { getLikeStory, likeStory } from "../../store/likeStory";
import { getComments, deleteComment } from "../../store/comment";
import RichEditor2 from "../editor/RichEditor2";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import CommentForm from "./CommentForm";
import CommentEditForm from "./CommentEditForm"

const StoryDetails = () => {
  const story = useSelector((state) => state.storyDetails);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await dispatch(storyDetailsActions.fetchStoryDetails(storyId));
    })();
  }, [dispatch]);
  const user = useSelector((state) => state.session.user);
  const body = useSelector((state) => [state.storyDetails.body]);
  const commentsObj = useSelector((state) => state.comment.allComments);
  const comments = Object.values(commentsObj);
  const storyId = Number(useLocation().pathname.split("/")[2]);

  const [showMenu, setShowMenu] = useState(false);
  const [showEdit, setShowEdit] = useState(false)
  const [following, setFollowing] = useState(false)

  const removeComment = () => {
    dispatch(deleteComment(id))
      .then(() => history.push('/home'))
  };

  // if (story.body) {
  //   setBody("this")
  // }

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
    // if (showMenu) return;
    if (!showMenu) setShowMenu(true);
    if (showMenu) setShowMenu(false);

    console.log("opening");
  };

  const handleClick = () => {
    if (!following) {
      dispatch(followActions.follow(user.id, story.user_id))
        .then(() => setFollowing(true))
    } else {
      dispatch(followActions.unfollow())
        .then(() => setFollowing(false))
    }
  }
  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = () => {
  //     setShowMenu(false);
  //     console.log("closing");
  //   };

  //   document.addEventListener("click", closeMenu);
  //   // return () => document.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  useEffect(() => {
    dispatch(getComments(storyId));
  }, [dispatch]);

  const deleteStory = async () => {
    await dispatch(storyActions.fetchDeleteStory(storyId));
    await dispatch(storyDetailsActions.deleteStoryDetails());
    history.push("/stories");
  };


  return (
    <div className="story-page-container">
      {<div className="story-page-holder">
        <div className="story-page">
          <SideBar />
          <main className="story-main">
            <div className="story-holder">
              <div className="flexCol centerCol">
                <div className="width700">
                  <div className="story-width">
                    <article>
                      <div className="story-main-top">
                        <div className="story-main-top">
                          <header className="story-header-section">
                            <div className="story-header-user">
                              <div className="story-user-holder">
                                <div className="user-image-wrapper">
                                  <div className="user-image">
                                    <img
                                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                      alt="Profile"
                                      className="profileImage"
                                    ></img>
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
                                  </div>
                                </div>
                              </div>
                            </div>
                          </header>
                          <section>
                            <div className="story-page-body">
                              <div>
                                <h1 className="title-padding">{story?.title}</h1>
                              </div>
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
                          </section>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="user-interactions">
                <div className="user-interactions-wrapper">
                  <div className="like-items">
                    <div>
                      <button id="likeClickBt" onClick={clickLike}>
                        Like
                      </button>
                    </div>
                    <div>
                      {" "}
                      {likeInfo?.num}
                    </div>
                  </div>
                  <div className="comments">
                    {showMenu && (
                      <div className="comments-sidebar">
                        <div className="comments-headline">
                          <img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            alt="Profile"
                            className="profileImage"
                          ></img><h2>{user?.username}</h2>
                        </div>
                        <div className="textarea-comments"><CommentForm /></div>
                        {story.Comments?.map((comment) => (
                          <div>
                            <img
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                              alt="Profile"
                              className="profileImage"
                            ></img>
                            {comment.body}
                            <button className="detailButton1" onClick={() => dispatch(deleteComment(comment.id))}>Delete</button>
                            <button className="detailButton2" onClick={() => setShowEdit(!showEdit)}>Edit</button>
                            {showEdit && (
                              <CommentEditForm />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div onClick={openMenu} className="comment-icon">
                    <i className="fa-regular fa-comment"></i>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="user-info-sidebar">
            <div className="user-sidebar">
              <div className="user-info-sidebar-container">
                <div className="user-info-sidebar-holder">
                  <div className="user-info-sidebar-wrapper">
                    <div className="user-sidebar-items">
                      <NavLink to={`/users/${story.user_id}`} className='profile-link'>
                        <div className="profile-picture">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            alt="Profile"
                            className="profile-image"
                          ></img>
                          <div className="under-image"></div>
                        </div>
                      </NavLink>
                      <div className="sb-spacer"></div>
                      <NavLink to={`/users/${story.user_id}`} className='profile-link'>
                        <h2 className="profile-author-name">
                          <span className="user">{story?.User?.username}</span>
                        </h2>
                      </NavLink>
                      <div className="follow-button-holder">
                        <button className={following ? "following-user-button" : "follow-user-button"} onClick={handleClick}>{following ? 'Following' : 'Follow'}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >}
    </div >
  );
};

export default StoryDetails;
