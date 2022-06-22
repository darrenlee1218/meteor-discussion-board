import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";

export const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  const location = useLocation();
  const user = useTracker(() => Meteor.user());
  if (!Meteor.userId()) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return children;
};
