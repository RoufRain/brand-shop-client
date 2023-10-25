import { useLoaderData } from "react-router-dom";
import HomeBrandCards from "./HomeBrandCards";

const Home = () => {
  const Cards = useLoaderData();
  console.log(Cards);

  return (
    <div className="">
      <div>
        <div
          className="hero min-h-screen"
          style={
            {
              // backgroundImage: `url(${bgimage})`,
            }
          }
        >
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content">
            <div
              className="space-y-10"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h1 className="mb-5 text-[#2f1b1b] text-5xl font-bold ">
                Explore Technology...
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <HomeBrandCards className=" " Cards={Cards}></HomeBrandCards>
      </div>
      {/* card section end */}

      {/* happy client section start */}
      <div className="mt-10 mb-10 p-10 bg-slate-400">
        <div className="flex justify-center text-lg font-semibold font-poppins border bg-slate-300 p-5 m-8 ">
          <h1>Top Ranked Product</h1>
        </div>
        <div className="grid justify-center md:grid-cols-2  lg:grid-cols-3 max-w-7xl mx-auto md:pl-10 space-y-3">
          <div
            className="card w-80 lg:w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-3 ">
              <img
                src="https://i.ibb.co/4dNMTq2/brad-pouncey-0-Ka-Trs-Wvo-JE-unsplash.jpg"
                alt=""
                className="h-44 w-full rounded-sm"
              />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title">Iphone</h2>
            </div>
          </div>
          <div
            className="card w-80 lg:w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-3 ">
              <img
                src="https://i.ibb.co/4dNMTq2/brad-pouncey-0-Ka-Trs-Wvo-JE-unsplash.jpg"
                alt=""
                className="h-44 w-full rounded-sm"
              />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title">Iphone</h2>
            </div>
          </div>
          <div
            className="card w-80 lg:w-96 bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <figure className="px-10 pt-3 ">
              <img
                src="https://i.ibb.co/4dNMTq2/brad-pouncey-0-Ka-Trs-Wvo-JE-unsplash.jpg"
                alt=""
                className="h-44 w-full rounded-sm"
              />
            </figure>
            <div className="card-body items-center ">
              <h2 className="card-title">Iphone</h2>
            </div>
          </div>
        </div>
      </div>
      {/* happy client section end */}

      {/* comment section */}
      <div className="bg-slate-700">
        <div className="hero min-h-screen bg-base-200">
          <div
            className="hero-content flex-col lg:flex-row"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
            <img
              src=""
              className="w-[250px] md:w-[400px] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-xl font-bold pl-10">
                Please Leave Us Comment!
              </h1>

              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="">Your Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="space-y-2">
                  <label>Write a Comment:</label> <br></br>
                  <textarea
                    className=" textarea textarea-accent h-24 w-[220px] sm:w-[250px] md:w-[400px]"
                    placeholder="Comment..."
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer footer-center p-10 bg-slate-500 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by Entertainment Event</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
