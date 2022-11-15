import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as storyActions from "../../store/stories";
import './Story.css'

const Stories = () => {
    const user = useSelector((state) => state.session.user);
    const stories = useSelector((state) => state.stories)
    console.log(stories)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storyActions.fetchAllStories());
    }, [dispatch]);

  return (
    <div>
      <ul>{stories[0] && stories.map((story) => (
        <li>
            <h4>{story.title}</h4>
            <p>{story.body}</p>
        </li>
      ))}</ul>
    </div>
  );
};

export default Stories;
