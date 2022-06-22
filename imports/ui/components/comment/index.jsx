import React from "react";

export const Comment = ({ comment }) => {
  return (
    <li>
      <span>
        Author: {comment.userName}
        <br />
        {comment.text}
      </span>
    </li>
  );
};
