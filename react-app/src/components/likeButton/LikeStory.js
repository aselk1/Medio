import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, NavLink, useLocation } from "react-router-dom";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import { getLikeStory, likeStory, deleteLikeStory } from "../../store/likeStory";

const LikeStory = () => {
  const user = useSelector((state) => state.session.user);
  const commentsObj = useSelector((state) => state.comment.allComments);
  const comments = Object.values(commentsObj);
  const { id } = useParams();
  const likes = useSelector((state) => state.likeStory);

  const likeInfo = likes[id];
  const allLikeUser = likeInfo?.allUser;
  const storyId = Number(useLocation().pathname.split("/")[2]);
  const story = useSelector((state) => state.storyDetails);

  const dispatch = useDispatch();
  const [imageId, setImageId] = useState('');
  const [deleteOn, setDeleteOn] = useState(false);


  // like story without color=================================
  // const clickStoryLike = (e) => {
  //   if (!user) alert("please login")
  //   if (allLikeUser?.find((id) => id === user?.id)) {

  //     dispatch(deleteLikeStory(id))
  //     // dispatch(getLikeStory(id))
  //   } else {
  //     dispatch(likeStory(id))
  //   }
  //   dispatch(getLikeStory(id))

  // }
  // ====================================================

  // ===================== story like with color   #F5F5F5
    if (allLikeUser === undefined) {
            dispatch(getLikeStory(id));
        }
        const btn = document?.getElementById("likeStoryClickBt");

    btn === null ? dispatch(getLikeStory(id)) :
      btn.style.backgroundColor = "#F5F5F5"


    if (allLikeUser?.find((id) => id === user?.id)) {
      btn === null ? dispatch(getLikeStory(id)) :
        btn.style.backgroundColor = "#3895D3";
    }
  const clickStoryLike = (e) => {
    e.preventDefault();
    if (!user)  alert("please login")
    if (allLikeUser?.find((id) => id === user?.id)) {
      btn === null ? dispatch(getLikeStory(id)) :
      btn.style.backgroundColor = "#F5F5F5"
      dispatch(deleteLikeStory(id))
      // dispatch(getLikeStory(id))
    } else {
      dispatch(likeStory(id))
      btn === null ? dispatch(getLikeStory(id)) :
      btn.style.backgroundColor = "#3895D3";
    }
    dispatch(getLikeStory(id))
};
// story like with color ==============================

useEffect(() => {
  dispatch(getLikeStory(id))

}, [dispatch]);

const commentInfo = {}

return (
  <>
    <div>
      <button id="likeStoryClickBt" onClick={clickStoryLike}>
        <i class="fa fa-thin fa-hands-clapping"></i>
      </button>
      {likeInfo?.num}
    </div>
  </>)
};

export default LikeStory;
