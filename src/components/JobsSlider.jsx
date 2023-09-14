import { useContext } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillClockCircle,
} from "react-icons/ai";
import { FaWallet, FaMapMarkerAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import imgGojek from "../assets/logo-gojek.png";
import imgBluebird from "../assets/bluebird.png";

const JobsSlider = () => {
  const { state } = useContext(GlobalContext);
  const {
    data,
    getTime,
    getMoney,
    handleButtonClickRight,
    handleButtonClickLeft,
    refs,
  } = state;
  console.log(data);
  return (
    <div className="bg-[#E6EEFF] text-neutral" ref={refs["job"]}>
      <div
        className=" max-w-[1240px] mx-auto text-center px-6 mt-[48px] py-[96px] max-md:py-[48px]"
        id="cardCore"
      >
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p className="md:text-xl text-md text-gray-500 font-medium">
              99+ Jobs uploaded per day
            </p>
            <h1 className="lg:text-4xl text-2xl font-bold mt-4">
              Explore <span className="text-blue-600"> jobs</span> all location
            </h1>
          </div>
          <div className="flex gap-2">
            <AiOutlineArrowLeft
              onClick={handleButtonClickLeft}
              size={30}
              className="hover:border-none hover:bg-blue-500  duration-200 hover:text-white text-gray rounded-full p-[9px] w-[40px] h-[40px] cursor-pointer border-[1px] border-gray-600 "
            />
            <AiOutlineArrowRight
              onClick={handleButtonClickRight}
              size={30}
              className="hover:border-none hover:bg-blue-500  duration-200 hover:text-white text-gray rounded-full p-[9px] w-[40px] h-[40px] cursor-pointer border-[1px] border-gray-600 "
            />
          </div>
        </div>
        <div className="cards-container mt-8 text-left">
          {/* Card */}
          {data.map((item, index) => (
            <>
              <div
                key={item.id + index}
                className="card-container flex flex-col justify-between bg-white rounded-3xl px-4  py-8 justify-self-start w-[260px]"
              >
                <div className="flex gap-3">
                  <div className="text-xs bg-[#E6EEFF] text-blue-600 rounded-full  text-center px-3 font-medium w-[90px]">
                    {item.job_type}
                  </div>
                  {item.job_status === 1 ? (
                    <div className="text-xs bg-[#F1FFF7] text-[#559769] rounded-full px-5 font-medium w-[110px]">
                      Open Hiring
                    </div>
                  ) : (
                    <div className="text-xs bg-[#FFF1F4] text-[#F35C5D] rounded-full px-5 font-medium w-[110px]">
                      Close Hiring
                    </div>
                  )}
                </div>
                <h2 className="font-bold text-xl my-4">{item.title}</h2>
                <p className="text-gray-500 text-xs  truncate">
                  {item.job_description}
                </p>
                <div className="flex mt-4 gap-2 items-center">
                  <div className="flex items-center gap-1">
                    <AiFillClockCircle size={22} className="text-blue-600" />
                    <p className="text-gray-500 font-medium text-[10px] leading-[120%]">
                      {getTime(item.updated_at)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWallet size={22} className="text-blue-600" />
                    <p className="text-gray-500 font-medium text-[10px] leading-[120%]">
                      {getMoney(item.salary_min, item.salary_max)}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <img
                    src={item.company_image_url}
                    className="w-[38px] rounded-full"
                  />
                  <div className="flex flex-col ">
                    <p className="text-md font-bold leading-[120%]">
                      {item.company_name}
                    </p>
                    <div className="flex items-center gap-[4px] ">
                      <FaMapMarkerAlt size={12} />
                      <span className="text-xs  text-gray-500 ">
                        {item.company_city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          {/* Card End */}
          <div className="card-container flex flex-col justify-between bg-white rounded-3xl px-4  py-8 justify-self-start w-[260px]">
            <div className="flex gap-3 ">
              <div className="text-xs bg-[#E6EEFF] text-blue-600 rounded-full text-center px-3 font-medium w-[90px]">
                Full Time
              </div>
              <div className="text-xs bg-[#FFF1F4] text-[#F35C5D] rounded-full px-5 font-medium w-[110px]">
                Close Hiring
              </div>
            </div>
            <h2 className="font-bold text-xl my-4">
              Android Software Engineer
            </h2>
            <p className="text-gray-500 text-xs  truncate">
              Android Software Engineer wanted something else as well,
            </p>
            <div className="flex mt-4 gap-2 items-center">
              <div className="flex items-center gap-1">
                <AiFillClockCircle size={22} className="text-blue-600" />
                <p className="text-gray-500 font-medium text-[10px] ">
                  11 hours ago
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaWallet size={22} className="text-blue-600" />
                <p className="text-gray-500 font-medium text-[10px] ">
                  Rp. 45rb - 30rb
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <img src={imgGojek} className="w-[38px] rounded-full" />
              <div className="flex flex-col ">
                <p className="text-md font-bold leading-[120%]">Go-Jek</p>
                <div className="flex items-center gap-[4px] ">
                  <FaMapMarkerAlt size={12} />
                  <span className="text-xs  text-gray-500 ">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container flex flex-col justify-between bg-white rounded-3xl px-4  py-8 justify-self-start w-[260px]">
            <div className="flex gap-3 ">
              <div className="text-xs bg-[#E6EEFF] text-blue-600 rounded-full text-center px-3 font-medium w-[90px]">
                Full Time
              </div>
              <div className="text-xs bg-[#F1FFF7] text-[#559769] rounded-full px-5 font-medium w-[110px]">
                Open Hiring
              </div>
            </div>
            <h2 className="font-bold text-xl my-4">
              Head of Seeds Development
            </h2>
            <p className="text-gray-500 text-xs  truncate">
              To effectively manage the delivery of SD strategy
            </p>
            <div className="flex mt-4 gap-2 items-center">
              <div className="flex items-center gap-1">
                <AiFillClockCircle size={22} className="text-blue-600" />
                <p className="text-gray-500 font-medium text-[10px] ">
                  08 hours ago
                </p>
              </div>
              <div className="flex items-center gap-1">
                <FaWallet size={22} className="text-blue-600" />
                <p className="text-gray-500 font-medium text-[10px] ">
                  Rp. 43rb - 32rb
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <img src={imgBluebird} className="w-[38px] rounded-full" />
              <div className="flex flex-col ">
                <p className="text-md font-bold leading-[120%]">Bluebird</p>
                <div className="flex items-center gap-[4px] ">
                  <FaMapMarkerAlt size={12} />
                  <span className="text-xs  text-gray-500 ">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card End */}
        </div>
      </div>
    </div>
  );
};

export default JobsSlider;
