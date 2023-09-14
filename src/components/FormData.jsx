import { useContext, useEffect } from "react";

import imgPattern from "../assets/patternBig.png";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const FormData = () => {
  const { state } = useContext(GlobalContext);
  const {
    inputJob,
    imagePreview,
    handleImageChange,
    handleChangeJob,
    handleChangeJobStatus,
    handleSubmit,
    setInputJob,
    setImagePreview,
    setId,
  } = state;
  const param = useParams();
  const idAdd = param.IdData;

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idAdd}`)
      .then((res) => {
        setId(res.data.id);
        setInputJob(res.data);
        setImagePreview(res.data.company_image_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idAdd]);

  return (
    <div>
      <img
        src={imgPattern}
        className="w-[450px] max-md:hidden h-auto absolute mt-[10px] right-[-200px] "
      />
      <div
        id="content"
        className=" h-full pb-[200px] pt-[40px]  bg-[#E6EEFF] ml-64 max-lg:ml-0 max-lg:mt-[50px] mt-[75px]"
      >
        <div className="mx-12 max-md:mx-auto  mb-4 ">
          <div className="w-[70%] max-md:max-w-[100%]  max-md:mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Title Jobdesk</span>
                </label>
                <input
                  type="text"
                  onChange={handleChangeJob}
                  name="title"
                  value={inputJob.title}
                  placeholder="Input your title"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Company Name</span>
                </label>
                <input
                  type="text"
                  onChange={handleChangeJob}
                  name="company_name"
                  value={inputJob.company_name}
                  placeholder="Input your company name"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  mb-4 "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Insert Image</span>
                </label>
                <input
                  type="text"
                  name="company_image_url"
                  value={inputJob.company_image_url}
                  onChange={handleImageChange}
                  placeholder="Input image URL"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="w-20 h-auto ">
                <img
                  src={imagePreview}
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Company City</span>
                </label>
                <input
                  type="text"
                  onChange={handleChangeJob}
                  name="company_city"
                  value={inputJob.company_city}
                  placeholder="Input your city"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">
                    Job Description
                  </span>
                </label>
                <textarea
                  type="text"
                  onChange={handleChangeJob}
                  name="job_description"
                  value={inputJob.job_description}
                  placeholder="Input your description"
                  className="textarea  bg-[#f9f9ff] text-neutral focus:textarea-bordered "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">
                    Job Qualification
                  </span>
                </label>
                <textarea
                  type="text"
                  onChange={handleChangeJob}
                  name="job_qualification"
                  value={inputJob.job_qualification}
                  placeholder="Input your qualification"
                  className="textarea  bg-[#f9f9ff] text-neutral focus:textarea-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Job Type</span>
                </label>
                <input
                  type="text"
                  onChange={handleChangeJob}
                  name="job_type"
                  value={inputJob.job_type}
                  placeholder="Input your type"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Job Tenure</span>
                </label>
                <input
                  type="text"
                  onChange={handleChangeJob}
                  name="job_tenure"
                  value={inputJob.job_tenure}
                  placeholder="Input your tenure"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Salary Min</span>
                </label>
                <input
                  type="number"
                  onChange={handleChangeJob}
                  name="salary_min"
                  value={inputJob.salary_min}
                  placeholder="Input your salary min"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="label-text text-neutral">Salary Max</span>
                </label>
                <input
                  type="number"
                  onChange={handleChangeJob}
                  name="salary_max"
                  value={inputJob.salary_max}
                  placeholder="Input your salary max"
                  className="input  bg-[#f9f9ff] text-neutral focus:input-bordered  "
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-neutral">Job Status</span>
                </label>
                <select
                  className="select bg-[#f9f9ff]  focus:select-bordered font-normal text-md text-gray-400  mb-2 "
                  name="job_status"
                  value={inputJob.job_status}
                  onChange={handleChangeJobStatus}
                >
                  <option disabled value="open">
                    Pick one
                  </option>
                  <option value="1" className="text-neutral">
                    Open
                  </option>
                  <option value="0" className="text-neutral">
                    Close
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="
                        
                        text-white
                        bg-primary
                        rounded-xl
                        border border-primary
                        px-6
                        text-md
                        py-3 
                        transition
                        hover:bg-opacity-90
                        "
              >
                Submit Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
