import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import {ImGithub} from 'react-icons/im';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn-light shadow-sm border-secondary rounded-3 w-50 border-2 rounded-pill fw-bold text-secondary d-block mx-auto my-3'><FcGoogle className='fw-bold mb-1 me-1 fs-5'></FcGoogle> Sign in with Google</button>
                <button className='btn btn-light shadow-sm border-light bg-primary rounded-3 w-50 border-2 rounded-pill fw-bold text-light d-block mx-auto my-3'><BsFacebook className='fw-bold mb-1 me-1 fs-5'></BsFacebook> Sign in with Facebook</button>
                <button className='btn btn-light shadow-sm border-secondary bg-dark rounded-3 w-50 border-2 rounded-pill fw-bold text-light d-block mx-auto'><ImGithub className='fw-bold mb-1 me-1 fs-5 text-success'></ImGithub> Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;