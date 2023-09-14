import { MdSearch, MdLocationOn, MdAttachMoney } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { TbZoomReset } from "react-icons/tb";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Dashboard = () => {
  // Dashboard Menu
  const { state } = useContext(GlobalContext);
  const {
    data,
    getMoney,
    dataFilter,
    handleSearch,
    searchValue,
    handleSearchChange,
    handleReset,
    handleDetailJob,
  } = state;

  return (
    <div>
      <div
        id="content"
        className="h-full pb-[200px] bg-[#E6EEFF] ml-64 max-lg:ml-0 max-lg:mt-[50px] mt-[70px]"
      >
        <div className="px-8  py-8">
          <div className="bg-white rounded-xl px-6 py-8 ">
            <div className="flex  max-lg:justify-center max-lg:flex-col max-lg:text-center max-lg:gap-y-2 justify-between font-medium flex-wrap ">
              <h3 className="text-xl text-neutral ">
                Let&apos;s find your dream job
              </h3>
              <p className="text-sm text-gray-400  ">
                <span>
                  {data
                    .map((item, index) => {
                      return index;
                    })
                    .reduce((a, b) => a + b, 0)}
                </span>
                &nbsp;available job vacancies here
              </p>
            </div>
            <div className="flex justify-between   gap-4 bg-[#E6EEFF] pl-4 pr-2 py-2 mt-4 rounded-xl flex-wrap">
              <div className="flex items-center  md:flex-1 md:border-r-2 md:border-gray-300 ">
                <MdSearch className="w-6 h-6 mr-2 text-blue-600" />
                <input
                  className="bg-transparent text-sm outline-none w-full text-neutral "
                  type="text"
                  placeholder="Job Tittle"
                  name="title"
                  value={searchValue.title}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex items-center md:flex-1 md:border-r-2 md:border-gray-300">
                <MdLocationOn className="w-6 h-6 mr-2 text-blue-600" />
                <input
                  className="bg-transparent text-sm outline-none w-full text-neutral"
                  type="text"
                  placeholder="Location"
                  name="company_city"
                  value={searchValue.company_city}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex items-center md:flex-1 ">
                <MdAttachMoney className="w-6 h-6 mr-2 text-blue-600" />
                <input
                  className="bg-transparent text-sm outline-none w-full text-neutral"
                  type="text"
                  placeholder="Salary Min"
                  name="salary_min"
                  value={searchValue.salary_min}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex gap-2 md:flex-1 w-full md:flex-nowrap   flex-wrap">
                <div
                  className="flex text-blue-600 items-center cursor-pointer"
                  onClick={handleReset}
                >
                  <TbZoomReset className="w-5 h-5 mr-2" />
                  <p>Reset</p>
                </div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 w-full rounded-lg "
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex  mt-4 ">
            <div
              className=" text-neutral flex-wrap flex max-lg:mr-0 mr-[270px] gap-4 "
              id="cardJob"
            >
              {dataFilter.map((item) => (
                <>
                  <div className="bg-white rounded-xl flex flex-col px-6 py-4 md:w-[32%] w-[50%]  flex-auto justify-between">
                    <div
                      className="flex gap-3  items-center mb-4"
                      key={item.id}
                    >
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
                      className="bg-blue-600 w-full text-white px-6 py-2 mt-4 rounded-lg text-sm font-medium"
                    >
                      Apply Job
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
