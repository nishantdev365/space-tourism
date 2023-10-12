import Logo from "../assets/shared/logo.svg";
import { useState } from "react";
import Icon_Hamburger from "../assets/shared/icon-hamburger.svg"
import Icon_Close from "../assets/shared/icon-close.svg"
import { Link, useLocation } from "react-router-dom";
import MobNav from "./MobNav";


const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isActiveLink = (path) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    return location.pathname === path ? "h-[92px] border-b-2 flex justify-center items-center" : "";
  };

  return (
    <>
      <div className="flex justify-end items-center max-sm:justify-start max-sm:p-6 flex-row absolute w-screen pt-8 pb-8 max-lg:pt-0 ">
      <div className="max-sm:flex max-sm:justify-between max-sm:w-full max-sm:mr-4">
      <div className="mr-10 cursor-pointer shrink-0 max-lg:hidden max-sm:block ">
          <Link to="/">
            <img src={Logo} alt="logo" /> 
          </Link>
        </div>
        <div
            className="hidden max-sm:flex max-sm:justify-center max-sm:items-center max-sm:cursor-pointer z-40"
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <img src={Icon_Close} alt="Close" />
            ) : (
              <img src={Icon_Hamburger} alt="Hamburger" />
            )}
          </div>
      </div>
        <div className="h-[0.1px] w-[573px] bg-white text-center opacity-[0.2515] max-lg:hidden translate-x-6 z-40"></div>
        <div
          className="max-sm:hidden flex justify-around items-center text-white text-[16px] max-lg:text-[12px]  shrink-0 leading-normal tracking-[2.7px] bg-custom-rgba-white w-[830px] max-lg:w-[60%] h-[96px]"
          id="navbar-list"
          style={{ backdropFilter: "blur(40.774227142333984px)" }}
        >
          <Link to="/" className={`link ${isActiveLink("/")}`}>
            <span className="mr-2  max-lg:hidden">00</span> HOME
          </Link>
          <Link
            to="/destination"
            className={`link ${isActiveLink("/destination")}`}
          >
           <span className="mr-2  max-lg:hidden">01</span>DESTINATION
          </Link>
          <Link to="/crew" className={`link ${isActiveLink("/crew")}`}>
          <span className="mr-2  max-lg:hidden">02</span>CREW
          </Link>
          <Link
            to="/technology"
            className={`link ${isActiveLink("/technology")}`}
          >
           <span className="mr-2   max-lg:hidden">03</span>TECHNOLOGY
          </Link>
        </div>
        
      </div>
      <div className="hidden max-sm:inline">
        {isMobileNavOpen ? 
           <MobNav />
           :
           null
        }
   
      </div>
    </>

   
  );
};

export default Navbar;



