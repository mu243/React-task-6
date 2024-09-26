import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="ms-2">
    <div >
      <h1 style={{fontSize:38}} className="mt-4 mb-4" >
          Sign Up
        </h1>
        
        <form onSubmit={handleSignup}>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" value={email}
              onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
  </div>
          
          
          <button
            type="submit"
            className="btn btn-primary"
            >
            Sign Up
          </button>
        </form>
        
       


        <div >
          <p >
            Already signed up?{" "}
            <a
              href="/"
              className=" hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
