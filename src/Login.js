import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = () => {};

  const register = () => {};

  return (
    <div className="login">
      <h1>You are not logged in</h1>
      <img src="" alt="" />
      <form>
        <input placeholder="Full Namerequired if registering()" type="text" />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onclick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onclick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
