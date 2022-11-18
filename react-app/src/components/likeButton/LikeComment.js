import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getLikeStory } from "../../store/likeStory";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import { getLikeComment, likeComment, deleteLikeComment } from "../../store/likeComment";

// import "./Story.css";

const LikeComment = ({ comment }) => {
  const user = useSelector((state) => state.session.user);
  const likes = useSelector((state) => state.likeComment);
  const likeInfo = likes[comment.id];
  const allLikeUser = likeInfo?.allUser;
  const dispatch = useDispatch();

  console.log("likes ??????",likes)
  console.log("like info????",likeInfo)
  console.log("allLikeUser??", allLikeUser)
  
  const clickCommentLike = (e) => {
    e.preventDefault();
    if (!user)  alert("please login")
    
    dispatch(getLikeComment(comment.id));
    if ((comment.user_id === user.id) ) {
      dispatch(deleteLikeComment(comment.id))
    }else {
      dispatch(likeComment(comment.id))

    }
  }


  // color change code================================================
  // const btn = document?.getElementById("likeCommentClickBt");
  // btn === null ? dispatch(getLikeComment(comment.id)) :
  // btn.style.backgroundColor = "#F5F5F5"

  

  // if ((allLikeUser?.find((id) => id === user?.id)) && (comment.id === likeInfo.comment_id)) {
  //   btn === null ? dispatch(getLikeComment(comment.id)) :
  //     btn.style.backgroundColor = "#3895D3";
  // }

  // const clickCommentLike = (e) => {
  //   e.preventDefault();
  //   console.log("clicked commentId",comment.id)
  //   if (!user) alert("please login")
  //   if ((allLikeUser?.find((id) => id === user?.id)) && (comment.id === likeInfo?.comment_id)) {
  //     btn === null ? dispatch(getLikeComment(comment.id)) :
  //       btn.style.backgroundColor = "#F5F5F5"
  //     dispatch(deleteLikeComment(comment.id))

  //     // dispatch(getLikeComment(comment.id))
  //   } else {
  //     dispatch(likeComment(comment.id))
  //     btn === null ? dispatch(getLikeComment(comment.id)) :
  //       btn.style.backgroundColor = "#3895D3";
  //   }
  //   dispatch(getLikeComment(comment.id))
  // }
// color change code ========================================
  useEffect(() => {
    dispatch(getLikeComment(comment.id))
  }, [dispatch]);


  return (
    <div>

      <div className="likeComment">
        <div>
          <button id="likeCommentClickBt" onClick={clickCommentLike}>
            <i class="fa fa-thin fa-hands-clapping"></i>
          </button>
          {likeInfo?.num}
        </div>
      </div>
    </div>
    //         ))}

  );
};

export default LikeComment;
