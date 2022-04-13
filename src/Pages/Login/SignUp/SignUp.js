import React from "react";
import { Link } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signup-form">
      <h2 className="text-center my-4 text-secondary">Please Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input type="email" name="email" id="" placeholder="Email" required />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <input
          type="password"
          name="confirmPass"
          id=""
          placeholder="Confirm Password"
          required
        />
        {user ? <p>Successfully Registered</p> : <p></p>}
        <button type="submit">Sign Up</button>
      </form>
      <p className="mt-2">
        Already have an account?{" "}
        <Link className="text-decoration-none text-warning" to={"/login"}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
