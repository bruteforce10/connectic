import { useContext } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const { state } = useContext(GlobalContext);
  const { scrollToRef, nav, scrollBackground, handleNav, navigate } = state;

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full ${
        scrollBackground ? "bg-[rgba(255,255,255,0.9)]" : ""
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 py-6 bg-transparent flex items-center justify-between text-neutral">
        <Link to="/" className="w-[40%] md:w-[18%] ">
          <img src={Logo} alt="connectic" className=" object-contain" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 ">
          <li
            onClick={scrollToRef}
            id="about"
            className=" hover:border-b-2 hover:border-blue-600 ease-in duration-75 cursor-pointer"
          >
            How it Works
          </li>
          <li
            onClick={scrollToRef}
            id="job"
            className="hover:border-b-2 hover:border-blue-600 ease-in duration-75 cursor-pointer"
          >
            Explore Jobs
          </li>
          <li
            onClick={scrollToRef}
            id="testi"
            className="hover:border-b-2 hover:border-blue-600 ease-in duration-75 cursor-pointer"
          >
            Testimonials
          </li>
          <li>
            {!Cookies.get("token") && (
              <Link to="/dashboard/login">
                <button className="py-1 px-8 text-md font-medium bg-primary text-white rounded-full cursor-pointer">
                  Login
                </button>
              </Link>
            )}
            {Cookies.get("token") && (
              <button
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/dashboard/login");
                }}
                className="py-1 px-8 text-md font-medium bg-red-500 text-white rounded-full cursor-pointer"
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
        <div className="md:hidden">
          {!nav ? (
            <AiOutlineMenu
              size={25}
              className="cursor-pointer"
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              size={25}
              className="cursor-pointer"
              onClick={handleNav}
            />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed mt-8 top-10 z-[99] right-0 p-8 w-[50%] duration-500 ease-in-out bg-white h-screen"
              : "right-[-100%] z-[99] fixed p-8 duration-500"
          }
        >
          <li
            className=" border-b border-blue-300 py-3 mb-5"
            id="about"
            onClick={scrollToRef}
          >
            How it Works
          </li>
          <li
            className=" border-b border-blue-300 py-3 mb-5"
            id="job"
            onClick={scrollToRef}
          >
            Explore Jobs
          </li>
          <li
            className=" border-b border-blue-300 py-3 mb-5"
            id="testi"
            onClick={scrollToRef}
          >
            Testimonials
          </li>
          <li>
            {!Cookies.get("token") && (
              <Link to="/dashboard/login">
                <button className="py-1 px-8 text-md font-medium bg-primary text-white rounded-full cursor-pointer">
                  Login
                </button>
              </Link>
            )}
            {Cookies.get("token") && (
              <button
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/dashboard/login");
                }}
                className="py-1 px-8 text-md font-medium bg-red-500 text-white rounded-full cursor-pointer"
              >
                Log Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
