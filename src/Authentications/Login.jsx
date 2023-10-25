// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import app from "../firebase/firebase.config";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  //for google sign in
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  //use for location which is decleard in event details page
  const location = useLocation();

  const navigate = useNavigate();
  console.log("location in the login page", location);

  //for email pass login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        swal("Login Successful!", "success");

        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        swal("Credential Does Not Match!", "Error");
      });
  };

  //signin wiht google
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center p-1 text-md font-semibold bg-zinc-100 rounded-md border w-28"
              >
                <FcGoogle className="h-6 w-6"></FcGoogle>LOGIN
              </button>
            </div>

            <label className="label">
              <p className="label-text-alt link link-hover">
                Do not have account?{" "}
                <Link className="text-lg text-blue-500" to={"/registration"}>
                  Register
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
