import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { CommentCollection } from "/imports/api/CommentCollection";

const insertComment = (taskText, user) =>
  CommentCollection.insert({
    text: taskText,
    userId: user._id,

    createdAt: new Date(),
  });

const SEED_USERNAME = "user";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
