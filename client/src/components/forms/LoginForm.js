import React, {useState, useEffect} from 'react';
import { auth } from "../../auth/firebase-config";

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function LoginComponent({navigate, auth }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth).then(console.log(auth.currentUser));
  };

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };


  return (
    <form>
      <div className="login-container">

        <h3> Login </h3>

        <div className="inner-container">
          <label htmlFor="login-Email"> Email:</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={email}
            required
            autoComplete="off"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </div>

        <div className="inner-container">
          <label htmlFor="login-Password"> Password:</label>
          <input
            type="password"
            id="login-password"
            name="email"
            value={password}
            required
            autoComplete="off"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>

        <button onClick={login}> Login</button>
      </div>

      {/* <button onClick={logout}> Sign Out </button> */}
    </form>
  );
}