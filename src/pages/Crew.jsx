import Anousheh_ansari from "../assets/crew/image-anousheh-ansari.png";
import Douglas_hurley from "../assets/crew/image-douglas-hurley.png";
import Mark_shuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import Victor_glover from "../assets/crew/image-victor-glover.png";
import { useState } from "react";

const Crew = () => {
  const [crewdetails, setCrewdetails] = useState(0);

  const CrewMembers = [
    {
      name: "Douglas Hurley",
      images: {
        png: Douglas_hurley,
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time ans he as a commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: Mark_shuttleworth,
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: Victor_glover,
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: Anousheh_ansari,
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-around items-center bg-cover bg-center bg-no-repeat bg-crew-desktop max-lg:bg-crew-tablet max-lg:text-center">
        <div className="max-lg:flex  text-white mt-44 max-sm:mt-24">
          <p className="font-barlow-condensed text-xl font-normal leading-normal tracking-widest uppercase">
            <span className="opacity-[0.25]">01</span> Meet your crew
          </p>
        </div>

        <div className="mt-2 max-sm:flex-col-reverse flex flex-row justify-between w-[1200px] max-sm:w-full max-lg:flex-col ">
          <div className="text-white max-sm:flex-col-reverse max-sm:h-full h-[520px] max-lg:mt-20 max-lg:h-[580px] ml-2 flex flex-col justify-around">
            <div className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
              <p className="text-white font-[Bellefair] opacity-[0.5042] text-[32px] font-normal leading-normal uppercase">
                {CrewMembers[crewdetails].role}
              </p>
              <p className="text-white font-[Bellefair] text-[56px] max-sm:text-[32px] font-normal leading-normal uppercase">
                {CrewMembers[crewdetails].name}
              </p>
              <p className="text-[#D0D6F9] font-[Barlow] text-[14px] font-normal leading-8 max-sm:w-[250px] w-[544px] min-h-min ">
                {CrewMembers[crewdetails].bio}
              </p>
            </div>
            <div className="flex space-x-3 max-lg:justify-center max-sm:mb-10">
              {/* Loop through tab data and render button for each. */}
              {CrewMembers.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    className={`py-2 transition-colors h-[1px] w-[15px] rounded-xl duration-300 bg-white ${
                      idx === crewdetails
                        ? "border-white"
                        : "border-transparent hover:border-white opacity-[0.5]"
                    }`}
                    style={{ marginRight: "20px" }} // Add margin-right for the gap
                    // Change the active tab on click.
                    onClick={() => setCrewdetails(idx)}
                  >
                    {tab.idx}
                  </button>
                );
              })}
            </div>
          </div>
          <div className=" max-lg:mt-0  max-lg:flex max-lg:justify-center">
            <img
              className="h-[520px] max-sm:h-2/4 max-sm:w-2/4"
              src={CrewMembers[crewdetails].images.png}
              alt="crew members"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
