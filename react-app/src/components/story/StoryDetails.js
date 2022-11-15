import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as storyDetailsActions from "../../store/storyDetails";

const StoryDetails = () => {
    const dispatch = useDispatch()
    const story = useSelector((state) => state.storyDetails)
    const storyId = Number(useLocation().pathname.split('/')[2])
  useEffect(() => {
    dispatch(storyDetailsActions.fetchStoryDetails(storyId));
  },[dispatch])
  return (
  <div>
    <h2>{story?.title}</h2>
    <h4>{story?.User?.username}</h4>
    <p>{story?.body}</p>
  </div>
  );
};

export default StoryDetails;
