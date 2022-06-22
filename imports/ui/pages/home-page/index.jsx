import { Meteor } from "meteor/meteor";
import React, { Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CommentCollection } from "/imports/api/CommentCollection";
import { Comment } from "../../components/comment";
import { CommentForm } from "../../components/comment-form";

export const Home = () => {
  const user = useTracker(() => Meteor.user());

  const comments = useTracker(() => {
    if (!user) {
      return [];
    }

    return CommentCollection.find().fetch();
  });

  return (
    <Fragment>
      <CommentForm user={user} />

      <ul className="comments">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </ul>
    </Fragment>
  );
};
