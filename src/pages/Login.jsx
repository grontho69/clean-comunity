import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);


  
  const handelSignin = (e) => {
     e.preventDefault();
    const email = e.target.email?.value;
   
    const passsword = e.target.password?.value;
    console.log( { email, passsword, });
    signInWithEmailAndPassword(auth, email, passsword).then((res) => {
      console.log(res);
      setUser(res.user);
      toast.success("Signin Successful");
    })
      .catch(e => {
        console.log(e);
        toast.error(e.message);
      });
   };
  const handleGoogleSignin = () => { 
    signInWithPopup(auth,googleProvider).then((res) => {
      console.log(res);
      setUser(res.user);
      toast.success("Signin Successful");
    })
      .catch(e => {
        console.log(e);
        toast.error(e.message);
      });
  };
  
console.log(user)
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
      <p className="py-6">
        Access your account and continue where you left off.
      </p>
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">

       {user?("user ache") :( <form onSubmit={handelSignin} className="fieldset">

          <label className="label">Email</label>
          <input
                type="email"
                name='email'
            className="input input-bordered"
            placeholder="Your Email"
            required
          />

          <div className="relative">
                          <label className="label">Password</label>
                    <input
                          type={show ?"text":"password"}
                          name='password'
                      className="input input-bordered"
                      placeholder="Password"
                      required
                          />
                          <span onClick={()=> setShow(!show)}   className="absolute right-8 top-9 cursor-pointer z-10">
                            {show? <FaEye/>: <IoEyeOff/>}
                          </span>
          
                    </div>

          <button className="btn btn-neutral mt-4 w-full">
            Login
          </button>

        </form>)}

        <div className="divider">OR</div>

            <button
        onClick={handleGoogleSignin}
              className="btn bg-white text-black border-[#e5e5e5] w-full">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <p className="mt-3 text-sm text-center">
          Don’t have an account?
          <a href="/register" className="link link-hover ml-1">
            Register here
          </a>
        </p>

      </div>
    </div>

  </div>
</div>

  )
}

export default Login
