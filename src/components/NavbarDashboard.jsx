import logo from "../assets/Logo.png";
import {
  MdWorkOutline,
  MdPostAdd,
  MdOutlineLogout,
  MdAccountCircle,
} from "react-icons/md";
import { TbTable } from "react-icons/tb";
import imgPro from "../assets/pro.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { BiMoney } from "react-icons/bi";
import Cookies from "js-cookie";

const NavbarDashboard = () => {
  const user = JSON.parse(Cookies.get("user"));

  const { state } = useContext(GlobalContext);
  const location = useLocation();
  const address = location.pathname;
  const {
    nav,
    handleNav,
    openHiringChecked,
    closeHiringChecked,
    handleClearAllClick,
    handleFilterClick,
    data,
    getMoney,
    handleDetailJob,
    navigate,
    setId,
    setInputJob,
    id,
    setImagePreview,
  } = state;

  return (
    <div>
      <div id="sideBar" className=" max-lg:hidden">
        <aside className="fixed z-2 left-0 flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border rtl:border-r-0 rtl:border-l ">
          <a href="#">
            <img className="w-auto h-7" src={logo} alt="" />
          </a>
          <div className="flex flex-col justify-between flex-1 mt-12">
            <nav className="-mx-3 flex flex-col justify-between  h-full">
              <div>
                <div className="space-y-3">
                  <Link
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#E6EEFF]  hover:text-blue-600"
                    to="/"
                  >
                    <AiOutlineHome className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-sm font-medium">Home</span>
                  </Link>
                  <Link
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#E6EEFF]  hover:text-blue-600"
                    to="/dashboard"
                  >
                    <MdWorkOutline className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-sm font-medium">Dashboard</span>
                  </Link>
                </div>
                <div className="space-y-3 mt-4">
                  <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                    Edit Data
                  </label>
                  <Link
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#E6EEFF] hover:text-blue-600"
                    to="/dashboard/list-job-vacancy"
                  >
                    <TbTable className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-sm font-medium">
                      List Table Data
                    </span>
                  </Link>
                  <Link
                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#E6EEFF] hover:text-blue-600"
                    to="/dashboard/list-job-vacancy/form"
                    onClick={() => {
                      setImagePreview();
                      setId(-1);
                      setInputJob({
                        title: "",
                        job_description: "",
                        job_qualification: "",
                        job_type: "",
                        job_tenure: "",
                        job_status: "",
                        company_name: "",
                        company_image_url: "",
                        company_city: "",
                        salary_min: 0,
                        salary_max: 0,
                      });
                    }}
                  >
                    <MdPostAdd className="w-5 h-5 mr-2" />
                    <span className="mx-2 text-sm font-medium">
                      Add Form Data
                    </span>
                  </Link>
                </div>
              </div>

              <div className="space-y-3 pb-20">
                <a
                  className="flex items-center cursor-pointer px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#FFF1F4] hover:text-[#F35C5D]"
                  onClick={() => {
                    Cookies.remove("token");
                    navigate("/dashboard/login");
                  }}
                >
                  <MdOutlineLogout className="w-5 h-5 mr-2" />
                  <span className="mx-2 text-sm font-medium">Log Out</span>
                </a>
              </div>
            </nav>
          </div>
        </aside>
      </div>
      <nav className=" pl-8 py-4 flex justify-between items-center z-[99] fixed top-0 w-full bg-white">
        {/* breadcrumb */}
        <div className="max-lg:hidden">
          <ol className="flex flex-wrap items-center  bg-transparent rounded-lg  ">
            <li className="text-sm leading-normal">
              <Link className="text-gray-600 opacity-50 max-sm:text-xs" to="/">
                Home
              </Link>
            </li>
            <li
              className="text-sm pl-1 capitalize leading-normal max-sm:text-xs text-gray-600 before:float-left before:pr-1 before:text-gray-600 before:content-['/']"
              aria-current="page"
            >
              {address === "/dashboard" && "Dashboard"}
              {address === "/dashboard/list-job-vacancy" && "List Table"}
              {address === "/dashboard/list-job-vacancy/form" && "Add Data"}
              {address === `/dashboard/list-job-vacancy/${id}` && "Edit Data"}
            </li>
          </ol>
          <h6 className="mb-0 font-bold  text-blue-600 md:text-xl text-sm mt-1 capitalize">
            {address === "/dashboard" && "Dashboard"}
            {address === "/dashboard/list-job-vacancy" && "List Table"}
            {address === "/dashboard/list-job-vacancy/form" && "Add Data"}
            {address === `/dashboard/list-job-vacancy/${id}` && "Edit Data"}
          </h6>
        </div>

        <a href="#" className="max-lg:block hidden">
          <img className="w-auto h-7" src={logo} alt="" />
        </a>

        <div className="flex items-center gap-3 px-8">
          <div className="flex items-center  font-medium cursor-pointer ">
            <p className="max-sm:hidden mr-2 hover:border-b-2 duration-100 hover:border-blue-600 text-neutral">
              {user.name ? user.name : "User"}
            </p>
            {/* <MdAccountCircle className="w-8 h-8  text-blue-600" /> */}
            {user.image_url ? (
              <img
                src={user.image_url}
                className="w-8 h-8 rounded-full"
                alt=""
              />
            ) : (
              <MdAccountCircle className="w-8 h-8  text-blue-600" />
            )}
          </div>
          <div className="max-lg:block hidden text-neutral">
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
        </div>
      </nav>
      <div
        className={
          nav
            ? "fixed right-0  z-[99] p-8 w-[50%] duration-500 ease-in-out -mt-[10px] bg-white h-full"
            : "right-[-100%] z-[99] fixed p-8 duration-500"
        }
      >
        <nav className="-mx-3 flex flex-col justify-between  h-full ">
          <div>
            <div className="space-y-3">
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#E6EEFF]  hover:text-blue-600"
                to="/"
              >
                <AiOutlineHome className="w-5 h-5 mr-2" />
                <span className="mx-2 text-sm font-medium">Home</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-[#E6EEFF]  hover:text-blue-600"
                href="#"
                to="/dashboard"
              >
                <MdWorkOutline className="w-5 h-5 mr-2" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
            </div>
            <div className="space-y-3 mt-4">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                Edit Data
              </label>
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#E6EEFF] hover:text-blue-600"
                to="/dashboard/list-job-vacancy"
              >
                <TbTable className="w-5 h-5 mr-2" />
                <span className="mx-2 text-sm font-medium">
                  List Table Data
                </span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#E6EEFF] hover:text-blue-600"
                to="/dashboard/list-job-vacancy/form"
                onClick={() => {
                  setId(-1);
                  setInputJob({
                    title: "",
                    job_description: "",
                    job_qualification: "",
                    job_type: "",
                    job_tenure: "",
                    job_status: "",
                    company_name: "",
                    company_image_url: "",
                    company_city: "",
                    salary_min: 0,
                    salary_max: 0,
                  });
                }}
              >
                <MdPostAdd className="w-5 h-5 mr-2" />
                <span className="mx-2 text-sm font-medium">Add Data Form</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3 pb-14">
            <a
              className="cursor-pointer flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-[#FFF1F4] hover:text-[#F35C5D]"
              onClick={() => {
                Cookies.remove("token");
                navigate("/dashboard/login");
              }}
            >
              <MdOutlineLogout className="w-5 h-5 mr-2" />
              <span className="mx-2 text-sm font-medium">Log Out</span>
            </a>
          </div>
        </nav>
      </div>
      {address === "/dashboard" ? (
        <div className=" absolute space-y-4 overflow-auto  right-0 pr-8 mt-[213px] text-neutral max-lg:hidden  ">
          <div className="bg-white w-64 px-6 py-4 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl">Job Filter</h3>
              <p
                className="text-md text-blue-600 cursor-pointer hover:border-b-2 hover:border-primary"
                onClick={handleClearAllClick}
              >
                Clear All
              </p>
            </div>
          </div>
          <div className="bg-white w-64 px-6 py-4 rounded-xl">
            <div className="space-y-1 font-medium">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text text-neutral ">Open Hiring</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                    onClick={handleFilterClick}
                    id="openHiring"
                    checked={openHiringChecked}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text text-neutral">Close Hiring</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                    onClick={handleFilterClick}
                    id="closeHiring"
                    checked={closeHiringChecked}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white w-64 px-8 py-4 rounded-xl flex flex-col ">
            <img src={imgPro} alt="" className="w-[80%] mx-auto" />
            <h4 className="font-bold text-primary text-xl mt-4 text-center">
              Connectic Priority
            </h4>
            <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg text-sm font-medium">
              Upgrade to pro
            </button>
          </div>
        </div>
      ) : address === "/dashboard/list-job-vacancy/form" ? (
        ""
      ) : address === "/dashboard/list-job-vacancy" ? (
        ""
      ) : address === `/dashboard/list-job-vacancy/${id}` ? (
        ""
      ) : (
        <div className=" absolute right-0 overflow-auto h-[600px] pb-[15px] space-y-4 pr-4 mt-[33px] text-neutral max-lg:hidden ">
          {data.map((item) => (
            <>
              <div className="bg-white rounded-xl flex flex-col px-6 py-4 w-64 flex-auto justify-between mx-auto">
                <div className="flex gap-3 mb-4 justify-center" key={item.id}>
                  <div className="text-xs bg-[#E6EEFF] text-blue-600 rounded-full  text-center px-3 font-medium ">
                    {item.job_type}
                  </div>
                  {item.job_status === 1 ? (
                    <div className="text-xs bg-[#F1FFF7] text-[#559769] rounded-full px-5 font-medium ">
                      Open Hiring
                    </div>
                  ) : (
                    <div className="text-xs bg-[#FFF1F4] text-[#F35C5D] rounded-full px-5 font-medium ">
                      Close Hiring
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 ">
                  <img
                    src={item.company_image_url}
                    alt=""
                    className="w-[40px] rounded-full "
                  />
                  <div>
                    <h4 className="font-medium font-md">{item.title}</h4>
                    <p className="text-sm text-gray-500 text-left w-[130px]">
                      {item.company_city}
                    </p>
                  </div>
                </div>

                <p className=" truncate mt-4 w-[200px] ">
                  {item.job_description}
                </p>
                <div className="flex mt-4 gap-2 w-[200px]">
                  <BiMoney size={24} className="text-blue-600" />
                  <p className="font-medium">
                    {getMoney(item.salary_min, item.salary_max)}
                    <span className="text-gray-400">/ Month</span>
                  </p>
                </div>
                <button
                  onClick={() => handleDetailJob(item.id)}
                  className="bg-blue-600  text-white px-6 py-2 mt-4 rounded-lg text-sm font-medium"
                >
                  Apply Job
                </button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDashboard;
