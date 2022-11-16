import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLikeStory } from "../../store/likeStory";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import "./Story.css";

const Stories = () => {
  const user = useSelector((state) => state.session.user);
  const stories = Object.values(useSelector((state) => state.stories));
  const userStories = stories.filter((story) => {
    return story.User.id === user.id;
  });
  const dispatch = useDispatch();
  const history = useHistory();
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
          <div className="flexRow centerCol spread">
            <h3 className="fontSize42">Your Stories</h3>
            <button className="writeStory" onClick={() => history.push('/new-story')}>Write a Story</button>
          </div>
          <ul className="noBullets">
            {userStories[0] &&
              userStories.map((story) => (
                <li>
                  <h4 onClick={(e) => storyDetails(story, e)}>{story.title}</h4>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stories;
