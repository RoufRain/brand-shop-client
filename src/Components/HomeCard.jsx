import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HomeCard = ({ card }) => {
  const { name, image } = card || {};

  return (
    <div>
      <div className="flex justify-center m-5" data-aos="fade-up">
        <div className="relative flex w-11/12 flex-col rounded-xl text-gray-700 shadow-md">
          <div className="relative mx-2 mt-2 h-[250px] overflow-hidden rounded-xl text-gray-700">
            <img className="h-full w-full" src={image} />
          </div>

          <div className="pt-6 pb-4 pr-3 pl-3 w-full ">
            <div className="mb-2 flex text-center items-center justify-between w-full">
              <button className="bg-orange-100 h-14 w-full rounded-md">
                <Link to={`/products/${name}`}>
                  <p className="block font-sans text-base font-medium leading-relaxed  text-blue-gray-900 rounded-md p-1 ">
                    {name}
                  </p>
                </Link>
              </button>
            </div>
          </div>

          {/* ///CardDetails/${id} */}

          {/* <div>
              <Link to={`/eventDetails/${id}`}>
                <div className="relative">
                  <button className=" absolute bottom-4 right-2 h-8 w-28 border bg-sky-500  rounded-md text-[white]">
                    See Details
                  </button>
                </div>
              </Link>{" "}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
