import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  
  if(loading || sending){
    return <Loading></Loading>
  }

  let errorElement;
  if (error) {
    errorElement = (
        <p className="text-danger">
          Error: {error?.message}
        </p>
    );
  }

 

  

  
  if(user){
      navigate(from, {replace: true});
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };


  
  const resetPassword = async() => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent Email');
    }
    else{
      toast('Enter Your Email First');
    }
    
  }
  return (
    <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-50 mx-auto d-block rounded-pill mb-1" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      {errorElement}
      <p className="mt-2">
        New To Genius?{" "}
        <Link className="text-decoration-none text-primary" to={"/signup"}>
          Create An Account
        </Link>
      </p>
      <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
