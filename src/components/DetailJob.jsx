import { useContext, useEffect, useState } from "react";
import { BiShareAlt } from "react-icons/bi";
import { HiAnnotation } from "react-icons/hi";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailJob = () => {
  const { state } = useContext(GlobalContext);
  const { getTime, getMoney } = state;

  const [dataDetail, setDataDetail] = useState(null);
  const params = useParams();
  const idAdd = params.IdData;

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idAdd}`)
      .then((res) => {
        setDataDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idAdd}`)
      .then((res) => {
        setDataDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idAdd]);

  return (
    <div>
      <div
        id="content"
        className="h-full pb-[50px] bg-[#E6EEFF] ml-64 max-lg:ml-0 max-lg:mt-[50px] mt-[70px]"
      >
        <div className="px-8 py-8">
          {dataDetail && (
            <div className="bg-white rounded-xl px-8 py-8 text-neutral  flex-col max-lg:mr-0 mr-[270px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={dataDetail.data.company_image_url}
                    className="h-auto w-[70px] rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold ">
                      {dataDetail.data.title}
                    </h2>
                    <p className="text-gray-500">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex gap-4 max-sm:flex-wrap max-sm:w-[10%] items-center">
                  <BiShareAlt className="text-primary" size={24} />
                  <HiAnnotation className="text-primary" size={24} />
                </div>
              </div>
              <div className="flex max-md:flex-wrap justify-between mt-8 gap-4 ">
                <div className="bg-[#E1FFFC] w-full rounded-xl text-neutral px-8 py-3 flex flex-col justify-between text-center">
                  <h4 className="text-sm mb-2">Job Type</h4>
                  <h3 className="text-md font-medium">
                    {dataDetail.data.job_type}
                  </h3>
                </div>
                <div className="bg-[#FFF1F4] w-full rounded-xl text-neutral px-8 py-3 flex flex-col justify-between text-center">
                  <h4 className="text-sm mb-2">Job Tenure</h4>
                  <h3 className="text-md font-medium">
                    {dataDetail.data.job_tenure}
                  </h3>
                </div>
                <div className="bg-[#E6EEFF] w-full rounded-xl text-neutral px-8 py-3 flex flex-col justify-between text-center">
                  <h4 className="text-sm mb-2">Month Salary</h4>
                  <h3 className="text-md font-medium">
                    {getMoney(
                      dataDetail.data.salary_min,
                      dataDetail.data.salary_max
                    )}
                  </h3>
                </div>
              </div>
              <div className="my-8 space-y-2">
                <h3 className="font-bold text-lg">About Role</h3>
                <p className="text-sm">{dataDetail.data.job_description}</p>
              </div>
              <div className="my-8 space-y-4">
                <h3 className="font-bold text-lg">Responsibilities</h3>
                <ul className="space-y-4">
                  <li className="text-sm flex gap-2 items-start">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox checkbox-primary checkbox-sm "
                    />
                    {dataDetail.data.job_qualification}
                  </li>
                </ul>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">
                  Posted {getTime(dataDetail.data.created_at)}
                </p>
                {dataDetail.data.job_status === 1 ? (
                  <button
                    onClick={() => {
                      Swal.fire({
                        icon: "success",
                        title: "Selamat Permintaan Akan Diproses",
                        confirmButtonColor: "#2463EB",
                        text: "Silahkan Cek Email Anda Untuk Verifikasi",
                      });
                    }}
                    className="bg-blue-600  text-white px-12 py-2 mt-4 rounded-lg text-sm font-medium"
                  >
                    Apply Job
                  </button>
                ) : (
                  <button className="bg-blue-600  text-white px-12 py-2 mt-4 rounded-lg text-sm font-medium opacity-40">
                    Close Job
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailJob;
