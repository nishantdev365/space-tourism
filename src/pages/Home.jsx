import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-between bg-cover bg-center bg-no-repeat  bg-home-desktop max-sm:bg-home-mobile max-lg:bg-home-tablet min-h-screen pb-28 max-lg:pb-0 ">
      <div className="flex max-lg:flex-col max-lg:justify-evenly max-lg:items-center max-lg:text-center justify-around items-end relative mt-48 max-lg:mt-20 max-lg:h-screen">
        <div className="inline-flex pr-0 flex-col justify-center items-start  w-[444px] max-sm:w-[250px] ">
          <p className="text-blue-200 text-[22px] max-sm:text-[14px] max-lg:w-full font-normal leading-normal tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="text-white font-['Bellefair'] max-lg:w-full text-9xl max-sm:text-7xl font-normal leading-normal">
            SPACE
          </p>
          <p className="text-blue-200 font-[barlow] text-base font-normal leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link to="destination">
          {" "}
          <div className="w-[274px] h-[274px] rounded-[274px] flex justify-center items-center bg-white cursor-pointer hover:ring-[50px] ring-white ring-opacity-[0.1036]">
            <p className="text-[#0B0D17] font-[bellefair] text-2xl text-center font-normal leading-normal tracking-widest">
              EXPLORE
            </p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
