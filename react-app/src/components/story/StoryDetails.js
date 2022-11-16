import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories"
import "./Story.css";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const user = useSelector((state) => state.session.user)
  const story = useSelector((state) => state.storyDetails);
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

  const deleteStory = async () => {
    await dispatch(storyActions.fetchDeleteStory(storyId))
    await dispatch(storyDetailsActions.deleteStoryDetails())
    history.push('/stories')
  }

  useEffect(() => {
    dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  }, [dispatch]);

  return (
    <div>
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
        <div onClick={openMenu} className="comment-icon"></div>
        {showMenu && <div class="comments-sidebar">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
        }
      </div>
    </div>
  );
};

export default StoryDetails;
