import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLikeStory } from "../../store/likeStory";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import "./Story.css";

const Stories = ({user}) => {
  // const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const stories = Object.values(useSelector((state) => state.stories));
  let userStories;
  if (!user) {
    history.push('/')
  } else {
    userStories = stories.filter((story) => {
      return story.User.id === user.id;
    });
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storyActions.fetchAllStories());
  }, [dispatch]);

  const storyDetails = async (story, e) => {
    e.preventDefault();
    await dispatch(storyDetailsActions.fetchStoryDetails(story.id));
    await dispatch(getLikeStory(story.id));
    history.push(`/stories/${story.id}`);
  };

  return (
    <div>
      <SideBar />
      <div className="flexCol pagePadding">
        <div className="width700">
          <div className="flexRow centerCol spread bottomBorder titlePadding">
            <h3 className="fontSize42">Your Stories</h3>
            <button className="writeStory" onClick={() => history.push('/new-story')}>Write a Story</button>
          </div>
          <ul className="noBullets">
            {userStories && userStories[0] &&
              userStories.map((story) => (
                <li className="bottomBorder titlePadding">
                  <h4 className="widthFit cursorPointer" onClick={(e) => storyDetails(story, e)}>{story.title}</h4>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stories;
