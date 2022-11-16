import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from '../../store/storyDetails'
import './Story.css'

const Stories = () => {
    const user = useSelector((state) => state.session.user);
    const stories = Object.values(useSelector((state) => state.stories))
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(() => {
        dispatch(storyActions.fetchAllStories());
    }, [dispatch]);

    const storyDetails = async (story, e) => {
      e.preventDefault();
      await dispatch(storyDetailsActions.fetchStoryDetails(story.id))
      history.push(`/stories/${story.id}`);
    };

  return (
    <div>
      <ul>{stories[0] && stories.map((story) => (
        <li>
          <h4 onClick={(e) => storyDetails(story, e)}>{story.title}</h4>
        </li>
      ))}</ul>
    </div>
  );
};

export default Stories;
