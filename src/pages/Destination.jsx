import { useState } from "react";
import MoonImage from "../assets/destination/image-moon.png";
import MarsImage from "../assets/destination/image-mars.png";
import EuropaImage from "../assets/destination/image-europa.png";
import TitanImage from "../assets/destination/image-titan.png";

const Destination = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsData = [
    {
      name: "MOON",
      images: {
        png: MoonImage,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "MARS",
      images: {
        png: MarsImage,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "EUROPA",
      images: {
        png: EuropaImage,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "TITAN",
      images: {
        png: TitanImage,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];

  return (
    <>
      <div className="text-white bg-cover bg-center bg-no-repeat min-h-screen  bg-destination-desktop max-lg:bg-destination-tablet ">
        <div className="pt-40 max-sm:pt-24 px-36 h-screen overflow-hidden max-lg:overflow-visible max-lg:h-full max-lg:px-14 max-lg:pb-20 max-sm:pb-48">
          <p className="font-barlow-condensed text-xl max-sm:text-sm ml-28 max-lg:ml-0 max-lg:mb-4 max-sm:text-center font-normal leading-normal tracking-widest uppercase">
            <span className="opacity-[0.25]">01</span> Pick your destination
          </p>
          <div className="flex justify-evenly max-lg:flex-col">
            <div className="px-10 py-4 max-lg:py-2  flex justify-center">
              <img 
                className="max-lg:h-3/4 max-lg:w-3/4 animate-spin-slow"
                src={tabsData[activeTabIndex].images.png} // Use the selected tab's image URL
                alt={tabsData[activeTabIndex].name}
              />
            </div>
            <div className="w-[445px] flex flex-col items-start justify-center ml-20 max-lg:w-full max-lg:text-center max-lg:ml-0 max-lg:items-center">
              <div className="flex space-x-3 ">
                {/* Loop through tab data and render button for each. */}
                {tabsData.map((tab, idx) => {
                  return (
                    <button
                      key={idx}
                      className={`py-2 border-b-4 transition-colors duration-300 font-barlow-condensed max-sm:text-xs text-base font-normal tracking-widest leading-normal ${
                        idx === activeTabIndex
                          ? "border-white"
                          : "border-transparent hover:border-white opacity-[0.5]"
                      }`}
                      style={{ marginRight: "20px" }} // Add margin-right for the gap
                      // Change the active tab on click.
                      onClick={() => setActiveTabIndex(idx)}
                    >
                      {tab.name}
                    </button>
                  );
                })}
              </div>
              {/* Show active tab content. */}
              <div className="py-4 max-h-96">
                <p className="text-white font-['Bellefair'] text-[100px] font-normal leading-normal max-sm:text-[50px]">{tabsData[activeTabIndex].name}</p>
                <p className="text-[#D0D6F9] font-['barlow'] text-[18px] font-normal leading-8">{tabsData[activeTabIndex].description}</p>
                <hr  className="h-[1px] bg-gray-700 mt-10 mb-5"/>
                <div className="flex  justify-between w-[350px] max-lg:w-full max-lg:justify-evenly max-sm:flex-col">
                  <div className="inline-flex flex-col justify-center items-start gap-3 max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:mb-4">
                    <p className="text-blue-300 font-barlow-condensed text-sm font-normal leading-normal tracking-widest uppercase">
                    AVG. DISTANCE
                    </p>
                    <p className="text-white font-bellefair text-2xl font-normal leading-normal uppercase">
                    {tabsData[activeTabIndex].distance}
                    </p>
                  </div>
                  
                  <div className="inline-flex flex-col justify-center items-start gap-3 max-sm:w-full max-sm:justify-center max-sm:items-center">
                    <p className="text-blue-300 font-barlow-condensed text-sm font-normal leading-normal tracking-widest uppercase">
                    Est. travel time
                    </p>
                    <p className="text-white font-bellefair text-2xl font-normal leading-normal uppercase">
                    {tabsData[activeTabIndex].travel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
