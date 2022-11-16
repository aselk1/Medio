import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SideBar from "../SideBar";
import * as storyDetailsActions from "../../store/storyDetails";
import * as storyActions from "../../store/stories";
import "./Story.css";

const StoryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.storyDetails);
  const storyId = Number(useLocation().pathname.split("/")[2]);

  const [showMenu, setShowMenu] = useState(false);

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
                  <button>Edit</button>
                  <button onClick={deleteStory}>Delete</button>
                </div>
              )}
            </div>
            <h2 className="titlePadding">{story?.title}</h2>
            <p>{story?.body}</p>
          </div>
        </div>
        <div className="comments">
          <div onClick={openMenu} className="comment-icon"></div>
          {showMenu && (
            <div class="comments-sidebar">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
