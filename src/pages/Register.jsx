import React, { useState } from 'react'
import { auth } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Register = () => {
  const [show, setShow] = useState(false);

  const handelSignup = (e) => { 
    e.preventDefault();
    const email = e.target.email?.value;
    const name = e.target.name ?.value;
    const photourl = e.target.photourl?.value;
    const passsword = e.target.password?.value;
    console.log("signup function enterd", { email, passsword, name, photourl });

  
    const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!regex.test(passsword)) {
      toast.error("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, passsword, ).then(res => {
      console.log(res);
      toast.success("Register successful");
    }).catch((e) => {
      console.log(e);
      
      toast.error(e.message);
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6">
        Create your account and start using all the features instantly.
      </p>
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">

        <form  onSubmit={handelSignup} className="fieldset">

          <label className="label">Name</label>
          <input
                type="text"
                name="name"
            className="input input-bordered"
            placeholder="Your Name"
            required
          />

          <label className="label">Email</label>
          <input
                type="email"
                name="email"
            className="input input-bordered"
            placeholder="Your Email"
            required
          />

          <label className="label">Photo URL</label>
          <input
                type="text"
                name='photurl'
            className="input input-bordered"
            placeholder="Photo URL"
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
            Register
          </button>

        </form>

        <div className="divider">OR</div>

     <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Sign Up with Google
</button>

        <p className="mt-3 text-sm text-center">
          Already have an account?
          <a href="/login" className="link link-hover ml-1">
            Login here
          </a>
        </p>

      </div>
    </div>

  </div>
</div>

  )
}

export default Register
