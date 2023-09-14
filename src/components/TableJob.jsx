import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HiOutlineSortDescending } from "react-icons/hi";

const TableJob = () => {
  const { state } = useContext(GlobalContext);
  const {
    dataFilter,
    getMoney,
    searchValue,
    handleSearchChange,
    handleSearch,
    handleClearAllClick,
    handleSalary,
    handleOpenHiringSort,
    handleMinSalary,
    handleDelete,
    handleEdit,
  } = state;

  return (
    <div>
      <div
        id="content"
        className="h-full pb-[200px] pt-[40px] max-md:w-[1000px] bg-[#E6EEFF] ml-64 max-lg:ml-0 max-lg:mt-[50px] mt-[75px]  "
      >
        <div className=" px-8 py-6 ">
          <div className="my-4 justify-between flex items-center">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search Job..."
                  className="input bg-white rounded-xl text-neutral"
                  name="title"
                  value={searchValue.title}
                  onChange={handleSearchChange}
                />
                <button
                  onClick={handleSearch}
                  className="btn btn-square rounded-lg -ml-4 z-20 bg-primary border-0 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="text-primary font-medium text-lg cursor-pointer m-1"
              >
                Sort
                <HiOutlineSortDescending
                  className="ml-2 mt-1 text-primary inline"
                  size={20}
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] space-y-4 bg-white menu p-2 shadow text-neutral rounded-box w-52 px-6 py-6"
              >
                <li
                  className="border-b-[1.5px] pb-2 font-medium cursor-pointer"
                  onClick={handleSalary}
                >
                  Salary Min to Max
                </li>
                <li
                  className="border-b-[1.5px] pb-2 font-medium cursor-pointer"
                  onClick={handleMinSalary}
                >
                  Salary Max To Min
                </li>
                <li
                  className="border-b-[1.5px] pb-2 font-medium cursor-pointer"
                  onClick={handleOpenHiringSort}
                >
                  Sort Open Hiring
                </li>
                <li
                  className="border-b-[1.5px] pb-2 font-medium cursor-pointer"
                  onClick={handleClearAllClick}
                >
                  Clear
                </li>
              </ul>
            </div>
          </div>
          <table className="table max-sm:table-xs  bg-white text-neutral">
            <thead>
              <tr className="text-neutral border-b-[1.5px] border-blue-600 font-medium text-xs">
                <th>No</th>
                <th>Name Job</th>
                <th>Company Name</th>
                <th>Job Type</th>
                <th>Job Tenure</th>
                <th>Job Status</th>
                <th>Salary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataFilter.map((item, index) => {
                return (
                  <tr className="border-b-0" key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.company_image_url} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm opacity-50">
                            {item.company_city}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.company_name}</td>
                    <td>{item.job_type}</td>
                    <td>{item.job_tenure}</td>
                    <td>
                      {item.job_status === 1 ? "Open Hiring" : "Close Hiring"}
                    </td>
                    <td>{getMoney(item.salary_min, item.salary_max)}</td>
                    <td className="flex gap-2 items-center">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-primary rounded-2xl text-white px-4 py-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 rounded-2xl text-white px-4 py-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableJob;
