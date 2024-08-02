import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostLike } from "../actions/post.actions";
import { addUserLike } from "../actions/user.actions";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: post.likes + 1,
    };

    const userData = {
      pseudo: user.pseudo,
      likes: user.likes + 1,
      age: user.age,
      id: user.id,
    };
    dispatch(addPostLike(postData));
    dispatch(addUserLike(userData));
  };

  return (
    <div>
      <img
        src="./icons/clap.png"
        onClick={() => handleLike()}
        className="clap"
        alt="clap"
      />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
