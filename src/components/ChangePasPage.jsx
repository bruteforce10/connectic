import img from "../assets/avatar-hero-3.png";
import kutip from "../assets/kutip.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ChangePasPage = () => {
  const { state } = useContext(GlobalContext);
  const { input, handleChange, passwordMatch, handleChangePassword } = state;

  return (
    <div>
      <section className="pb-[200px] mt-[140px] max-w-[1240px] mx-auto relative text-neutral">
        <div className="flex max-md:flex-wrap max-md:px-4 gap-8 max-md:gap-[60px] justify-center  items-center">
          <div className="w-full self-stretch  lg:w-1/2 xl:w-6/12 px-8 bg-[#E6EEFF] py-8 rounded-xl">
            <div className="max-w-[570px] mb-12 lg:mb-0 ">
              <h2
                className=" tracking-tight
                                max-sm:text-center
                                mt-6
                                mb-6
                                font-bold
                                text-[32px]
                                sm:text-[40px]
                                lg:text-[36px]
                                xl:text-[35px]
                                leading-[150%]
                                "
              >
                Be a part of an{" "}
                <span className="text-primary">Unlimited Career</span> Journey.
                Join Now!
              </h2>
              <p className="text-base text-body-color leading-relaxed mb-9  max-sm:text-center">
                Login, temukan ribuan lowongan kerja, lacak lamaran, dan atur
                notifikasi sesuai preferensi Anda. Buka pintu ke peluang karier
                tak terbatas!
              </p>
            </div>
            <div className="stack w-full text-white">
              <div className="card shadow-md bg-gray-800 pt-7 overflow-hidden">
                <img
                  src={kutip}
                  className="h-auto w-[80px] opacity-30 absolute top-[-35px] left-8"
                />
                <div className="card-body">
                  <p className="max-sm:text-center">
                    Fitur yang luar biasa dari connectic! Saya bisa akses
                    lowongan kerja terbaru, lacak lamaran, dan atur notifikasi
                    sesuai preferensi. Terima kasih atas pengalaman pencarian
                    kerja yang efisien!
                  </p>
                  <div className="flex gap-2 items-center">
                    <img src={img} className="h-auto w-16" />
                    <div>
                      <h4 className="text-lg font-medium">Firdi Audi Putra</h4>
                      <p className="text-xs text-gray-300">
                        Front End Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow bg-gray-800 ">
                <div className="card-body">
                  <h2 className="card-title">Notification 2</h2>
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
              <div className="card shadow-sm bg-gray-800 ">
                <div className="card-body">
                  <h2 className="card-title">Notification 3</h2>
                  <p>You have 3 unread messages. Tap here to see.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  lg:w-1/2 xl:w-5/12 max-md:px-4">
            <div className="bg-white relative rounded-2xl p-8 sm:p-12 shadow-lg">
              <form onSubmit={handleChangePassword} className="space-y-3">
                <h3 className="text-2xl font-medium">Change Password</h3>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-neutral text-md">
                      Current Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="current_password"
                    value={input.current_password}
                    onChange={handleChange}
                    placeholder="current password"
                    className="input input-bordered w-full input-primary text-neutral "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-neutral text-md">
                      New Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="*********"
                      className="input input-bordered w-full input-primary text-neutral  "
                      required
                      name="new_password"
                      value={input.new_password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-neutral text-md">
                      New Confirm Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="*********"
                      className="input input-bordered w-full input-primary text-neutral  "
                      required
                      name="new_confirm_password"
                      value={input.new_confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {!passwordMatch && (
                  <p className="mt-4 text-red-600 font-medium">
                    New password and confirm password do not match.
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    className="
                    mt-4
                        w-full
                        text-white
                        bg-primary
                        rounded-xl
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                  >
                    Change Password
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute max-xl:hidden -top-10 -right-9 z-[-1]">
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePasPage;
