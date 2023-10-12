
import { Link, useLocation } from "react-router-dom";

const MobNav = () => {
    const isActiveLink = (path) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const location = useLocation();
        return location.pathname === path ? "h-[20px] mb-10 border-b-2 flex  " : "mb-10";
      };
  return (
    <>
      <div
          className="absolute right-0 w-3/5 h-screen z-30 flex flex-col text-sm text-white px-10 pt-28"
          id="navbar-list"
          style={{ backdropFilter: "blur(40.774227142333984px)" }}
        >
          <Link to="/" className={`link ${isActiveLink("/")}`}>
            <span className="mr-2  ">00</span> HOME
          </Link>
          <Link
            to="/destination"
            className={`link ${isActiveLink("/destination")}`}
          >
           <span className="mr-2  ">01</span>DESTINATION
          </Link>
          <Link to="/crew" className={`link ${isActiveLink("/crew")}`}>
          <span className="mr-2  ">02</span>CREW
          </Link>
          <Link
            to="/technology" 
            className={`link ${isActiveLink("/technology")}`}
          >
           <span className="mr-2  ">03</span>TECHNOLOGY
          </Link>
        </div>
    </>
  )
}

export default MobNav