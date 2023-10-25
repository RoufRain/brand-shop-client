/* eslint-disable react/prop-types */
import HomeCard from "./HomeCard";

const HomeBrandCards = ({ Cards }) => {
  console.log(Cards);

  return (
    <div>
      <div className="flex justify-center text-lg font-semibold font-poppins border bg-slate-300 p-5 m-8 ">
        <h1>Top Brand!</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Cards?.map((card) => (
          <HomeCard key={card.id} card={card}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default HomeBrandCards;
