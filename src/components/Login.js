import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
   
      navigate("/list");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="ms-2">
      <div >
        <h1 style={{fontSize:38}} className="mt-4 mb-4" >
          Log In
        </h1>
        <form onSubmit={handleLogin}>
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
            Log In
          </button>
        </form>
        <div >
          <p >
            Don't have an account?{" "}
            <a
              href="/signup"
              className=" hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
