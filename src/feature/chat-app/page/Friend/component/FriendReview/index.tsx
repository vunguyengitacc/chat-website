import { RootState } from "app/reduxStore";
import { friendsSelector } from "feature/auth/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFriendReviewStyle from "./style";

const FriendReview = () => {
  const { friendId } = useParams();
  const friend = useSelector((state: RootState) =>
    friendsSelector.selectById(state, Number(friendId))
  );

  const style = useFriendReviewStyle();
  const navigator = useNavigate();

  useEffect(() => {
    if (friend === undefined) navigator("/*");
  }, [friend]);
  return <div>{friend?.name}</div>;
};

export default FriendReview;
