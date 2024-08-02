import React, { useState } from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { delePost, editPost } from "../actions/post.actions";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [editContent, setEditContent] = useState(post.content);

  const handleEdit = (e) => {
    e.preventDefault();
    const postData = {
      author: user.pseudo,
      title: post.title,
      likes: post.likes,
      id: post.id,
      content: editContent,
    };

    dispatch(editPost(postData));
    setEditToggle(false);
  };

  return (
    <div className="post">
      {user.pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            src="./icons/delete.svg"
            onClick={() => dispatch(delePost(post.id))}
            alt="delete"
          />
        </div>
      )}

      <h2>{post.title}</h2>
      <img src="./img/post.png" className="post-img" alt="img-post" />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
