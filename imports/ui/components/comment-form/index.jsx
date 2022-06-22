import React, { useState } from "react";
import { useApp } from "../../../utils/context";

export const CommentForm = ({ user }) => {
  const [text, setText] = useState("");
  const { submitComment } = useApp();

  return (
    <form
      className="comment-form"
      onSubmit={(e) => {
        submitComment(e, text, user);
      }}
    >
      <input
        type="text"
        placeholder="Type to add new comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Comment</button>
    </form>
  );
};
