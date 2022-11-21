import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getLikeStory } from "../../store/likeStory";
import * as storyActions from "../../store/stories";
import * as storyDetailsActions from "../../store/storyDetails";
import SideBar from "../SideBar";
import { getLikeComment, likeComment, deleteLikeComment } from "../../store/likeComment";

const LikeComment = ({ comment }) => {
  const user = useSelector((state) => state.session.user);
  const likes = useSelector((state) => state.likeComment);
  const likeInfo = likes[comment.id];
  const allLikeUser = likeInfo?.allUser;
  const dispatch = useDispatch();

  const clickCommentLike = (e) => {
    e.preventDefault();
    if (!user) alert("please login")

    dispatch(getLikeComment(comment.id));
    if ((comment.user_id === user.id)) {
      dispatch(deleteLikeComment(comment.id))
    } else {
      dispatch(likeComment(comment.id))

    }
  }

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
