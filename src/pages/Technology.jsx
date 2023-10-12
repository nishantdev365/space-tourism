import { useState } from "react";
import Launch_vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Launch_vehicle_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Space_capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import Space_capsule_portrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import Spaceport_portrait from "../assets/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const [tech, setTech] = useState(0);

  const Technology = [
    {
      name: "Launch vehicle",
      images: {
        jpg: Launch_vehicle,
        jpg_portrait: Launch_vehicle_portrait,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        jpg: Spaceport,
        jpg_portrait: Spaceport_portrait,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        jpg: Space_capsule,
        jpg_portrait: Space_capsule_portrait,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  return (
    <>
      <div className="flex justify-end  bg-cover bg-center bg-no-repeat min-h-screen bg-technology-desktop max-lg:bg-technology-tablet text-white">
        <div className="min-w-[90%] mt-32 max-lg:w-full h-full">
          <p className="font-[barlow-condensed] text-xl max-lg:text-xxl font-normal leading-normal max-sm:text-center max-sm:mb-2 tracking-widest uppercase">
            <span className="opacity-[0.25] ">03</span> SPACE LAUNCH 101
          </p>
          <div className="flex max-lg:flex-col-reverse justify-between items-center min-h-full max-lg:justify-evenly">
            <div className="flex justify-around w-2/4 max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:justify-start ">
            <div className="flex flex-col max-lg:flex-row max-lg:justify-center max-lg:gap-4 max-lg:mb-20">
              {/* Loop through tab data and render button for each. */}
              {Technology.map((tab, idx) => {
                return (
                  <button
                    key={idx}
                    className={`py-2 mb-6 text-[32px] h-20 w-20 rounded-full font-[Bellefair] transition-colors duration-300 tracking-widest leading-normal ${
                      idx === tech
                        ? "bg-white text-black"
                        : "bg-transparent hover:bg-white opacity-[0.5]"
                    }`}
                    // Change the active tab on click.
                    onClick={() => setTech(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center "> 
              <p className="text-[#D0D6F9] font-[barlow-condensed] text-base font-normal tracking-wider max-lg:mb-10">THE TERMINOLOGY…</p>
              <p className="text-white font-[Bellefair] text-[56px] font-normal leading-normal uppercase max-lg:text-[35px] max-lg:mb-10">
                {Technology[tech].name}
              </p>
              <p className="text-[#D0D6F9] font-[Barlow] text-[14px] font-normal leading-8 w-[444px] max-sm:w-[280px] min-h-min max-lg:text-center max-lg:mb-10">
                {Technology[tech].description}
              </p>
            </div>
            </div>
            <div className="max-lg:h-2/4 h-[500px] w-[452px] max-lg:w-full">
              <img
                className="max-lg:h-2/4 h-full w-full max-w-full max-h-full object-contain max-lg:object-fill max-lg:mb-20"
                src={Technology[tech].images.jpg}
                alt="technology"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
