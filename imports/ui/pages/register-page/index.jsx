import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../utils/context";
import { TextInput } from "../../components/text-input";

export const RegisterPage = () => {
  const { sign, error, signup } = useApp();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  if (sign) {
    navigate("/home", { replace: true });
  }

  return (
    <form
      onSubmit={(e) => signup(e, username, password, confirmPassword)}
      className="login-form"
    >
      <TextInput
        label="Username"
        type="text"
        name="username"
        placeHolder="Username"
        onChange={setUsername}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        placeHolder="Password"
        onChange={setPassword}
      />
      <TextInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeHolder="Confirm Password"
        onChange={setConfirmPassword}
      />

      <div className="error">{error}</div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};
