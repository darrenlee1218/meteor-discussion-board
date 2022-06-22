import React, { useCallback, useMemo, useState } from "react";
import { Meteor } from "meteor/meteor";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { RegisterPage } from "./pages/register-page";
import { PrivateRoute } from "./routes/private-route";
import { Layout } from "./components/layout";
import AppContext from "../utils/context";
import { CommentCollection } from "../api/CommentCollection";

export const App = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    sign: false,
    error: "",
  });

  const logout = useCallback(() => {
    setState({ ...state, sign: false });
    Meteor.logout();
  }, []);

  const signin = useCallback((e, username, password) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, (e) => {
      if (e) {
        setState({ ...state, error: e.reason, sign: false });
      } else {
        setState({ ...state, error: "", sign: true });
      }
    });
  }, []);

  const signup = useCallback((e, username, password, confirmPassword) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setState({ ...state, error: "Doesn't match password", sign: false });
      return;
    }
    Accounts.createUser(
      {
        username: username,
        password: password,
      },
      (e) => {
        if (e) {
          setState({ ...state, error: e.reason, sign: false });
        } else {
          setState({ ...state, error: "", sign: true });
        }
      }
    );
  }, []);

  const submitComment = useCallback((e, text, user) => {
    e.preventDefault();

    if (!text) return;

    CommentCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
      userId: user._id,
      userName: user.username,
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      logout,
      signin,
      signup,
      logout,
      submitComment,
    }),
    [state, logout, signin, signup, logout, submitComment]
  );

  return (
    <AppContext.Provider value={value}>
      <Layout>
        <Routes>
          <Route element={<LoginPage />} path="/login" exact />
          <Route element={<RegisterPage />} path="/register" exact />
          <Route
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
            path="/*"
          />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
};
