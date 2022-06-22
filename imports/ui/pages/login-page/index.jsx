import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../utils/context";
import { TextInput } from "../../components/text-input";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { sign, error, signin } = useApp();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sign) {
      navigate("/home", { replace: true });
    }
  }, [sign]);

  return (
    <form
      onSubmit={(e) => signin(e, username, password)}
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

      <div className="error">{error}</div>
      <div className="row">
        <div>
          <button type="submit">Log In</button>
        </div>
        <div>
          <div onClick={() => navigate("/register")}>Register</div>
        </div>
      </div>
    </form>
  );
};
