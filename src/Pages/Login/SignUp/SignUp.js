import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./SignUp.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword,user] =
    useCreateUserWithEmailAndPassword(auth);
   const navigate =  useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if(user){
    navigate('/home')
    console.log(user);
  }
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
        <button className="w-100 btn btn-secondary" type="submit" value='Register'>Sign Up</button>
      </form>
      <p className="mt-2 fw-bold">
        Already have an account?{" "}
        <Link className="text-decoration-none text-info" to={"/login"}>
          Sign In
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
