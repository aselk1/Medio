import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories"
import "./Story.css";
import { getComments } from "../../store/comment";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.session.user)
  const story = useSelector((state) => state.storyDetails);
  const commentsObj = useSelector((state) => state.comment.allComments)
  const comments = Object.values(commentsObj)
  const storyId = Number(useLocation().pathname.split("/")[2]);

  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
    console.log("opening")
  }

  useEffect(() => {
    const closeMenu = () => {
      if (!showMenu) return
      setShowMenu(false)
      console.log("closing")
    }

    document.addEventListener("click", closeMenu)
    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  useEffect(() => {
    dispatch(getComments(story.id))
}, [dispatch])

  const deleteStory = async () => {
    await dispatch(storyActions.fetchDeleteStory(storyId))
    await dispatch(storyDetailsActions.deleteStoryDetails())
    history.push('/stories')
  }

  useEffect(() => {
    dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  }, [dispatch]);

  return (
    <div className="story-details">
      {story.User?.id === user?.id && <div className="flexRow flexEnd">
        <button>Edit</button>
        <button onClick={deleteStory}>Delete</button>
      </div>}
      <div className="flexCol center">
        <h4>{story?.User?.username}</h4>
        <h2>{story?.title}</h2>
        <p className="width700">{story?.body}</p>
      </div>
      <div className="comments">
        {showMenu && <div class="comments-sidebar">
          <h2>{user?.username}</h2>
          <textarea className="textarea-comments"></textarea>
          {comments?.map(comment => (
            <div>
              {comment.body}
            </div>
          ))}

        </div>
        }
      </div>
      <div onClick={openMenu} className="comment-icon"><i class="fa-regular fa-comment"></i></div>
    </div>
  );
};

export default StoryDetails;
