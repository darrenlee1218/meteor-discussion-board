import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useApp } from "../../../utils/context";

export const Layout = ({ children }) => {
  const { logout } = useApp();
  const user = useTracker(() => Meteor.user());
  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>📝️ Discussion Board</h1>
          </div>
        </div>
        {Meteor.userId() && <div className="user">Name:{user?.username}</div>}
        {Meteor.userId() && (
          <button className="logout" onClick={logout}>
            Logout
          </button>
        )}
      </header>

      <div className="main">{children}</div>
    </div>
  );
};
