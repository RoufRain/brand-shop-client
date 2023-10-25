// import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Link } from "react-router-dom";
import swal from "sweetalert";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    // const form = e.target;
    // // console.log(e.currentTarget);
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email, password);

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Registration Successful!", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Already Registered!", "error");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>

            <label className="label">
              <a href="#" className="label-text-alt text-lg link link-hover">
                Already have account?{" "}
                <Link className="text-lg text-blue-500" to={"/login"}>
                  Login
                </Link>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
