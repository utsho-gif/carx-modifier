import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./SignUp.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  if(loading || updating){
    return <Loading></Loading>
  }
  
  const handleSignUp = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName})
    navigate("/home");
  };
  if (user) {
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
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
        {user ? <p>Successfully Registered</p> : <p></p>}
        <input
          disabled={!agree}
          className="w-50 mx-auto d-block btn btn-primary rounded-pill"
          type="submit"
          value="Register"
        />
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
