import Herobg from "../assets/hero-bg.png";
import LogoLinked from "../assets/logoLinked.png";
import LogoPKS from "../assets/logoPKS.png";
import LogoSanberCode from "../assets/logoSanberCode.png";
import AvatarHero from "../assets/avatar-hero-3.png";
import Traveloka from "../assets/traveloka.png";
import Tokopedia from "../assets/tokopedia.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  const { state } = useContext(GlobalContext);
  const { scrollToRef } = state;

  return (
    <div
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card max-w-[1240px] mx-auto mt-[-20%] md:mt-[-5%] pt-[230px] md:pt-[200px]  px-6 py-10  text-center text-neutral"
        id="card"
      >
        <h1 className="lg:text-7xl text-5xl md:max-w-[80%] md:ml-auto font-bold  leading-[160%] md:leading-[200%] tracking-tight md:text-right md:pr-16 mb-7">
          Hire the best <span className="avatar-one" /> people for any job{" "}
          <span className="avatar-two" />
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="hidden md:block col-auto mt-[-80px]">
            <div className="flex w-full gap-5 flex-wrap justify-end">
              <div
                className="bg-white bg-opacity-[60%] border-[1.5px] border-white rounded-3xl p-5 flex-auto w-[300px]"
                id="card-jobOne"
              >
                <img src={AvatarHero} className="w-[40%] mx-auto" />
                <h2 className="font-bold text-xl my-2">Firdi Audi Putra</h2>
                <div className="flex justify-evenly items-center my-2">
                  <div className="text-xs bg-[#E1FFFC] text-[#5AB4AD] rounded-full px-5 font-medium">
                    UI Designer
                  </div>
                  <div className="text-xs bg-[#FFF1F4] text-[#F35C5D] rounded-full px-5 font-medium">
                    Front-End Developer
                  </div>
                </div>
                <p className="text-gray-500 text-xs w-[200px] mx-auto">
                  Firdi is a full-stack designer with 3+ years of exprience
                </p>
              </div>
              <div
                className=" bg-white bg-opacity-[60%] border-[1.5px] border-white rounded-3xl p-5 flex-auto w-[220px] self-end"
                id="card-job"
              >
                <img src={Traveloka} className="w-[30%] mx-auto" />
                <h2 className="font-bold text-xl my-4">Job Completed!</h2>
                <p className="text-gray-500 text-xs">
                  Invoice has been sent to your inbox
                </p>
              </div>
              <div
                className="bg-white bg-opacity-[60%] border-[1.5px] border-white rounded-3xl p-5 flex-initial w-[900px]"
                id="card-jobTwo"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src={Tokopedia} className="w-[40px]" />
                    <h3 className="text-md self-center text-gray-500">
                      Tokopedia.id
                    </h3>
                  </div>
                  <p className="text-gray-500 self-center">8h ago</p>
                </div>
                <h2 className="font-bold text-xl my-4 text-left">
                  Full-Stack Designer (Project Based)
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full col-auto">
            <div className="flex flex-col gap-3 md:text-left text-center px-8">
              <p className="mt-4 text-sm text-gray-500 ">
                Largest network of independent professionals, with top talent
                across 100+ categories. We’ll connect you with the right person
                for your project, fast.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={scrollToRef}
                  id="job"
                  className="hover:bg-blue-400  bg-blue-600 text-white px-6 py-3 my-8 rounded-xl md:text-xl self-center  md:self-start "
                >
                  Find Job <BsArrowRightCircle className="inline ml-1 mb-1" />
                </button>
                <Link to="/dashboard" className="cursor-pointer">
                  <button className="hover:bg-blue-600 hover:text-white duration-100 border-[1.5px] border-blue-600  text-blue-600 px-6 py-3 my-8 rounded-xl md:text-xl self-center  md:self-start ">
                    Dashboard
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-8 md:mt-10">
              <p className="text-left text-gray-500">Our Partner</p>
              <div className="flex py-4 gap-4">
                <img
                  src={LogoLinked}
                  className="w-[30%] object-contain"
                  alt="logo-linked"
                />
                <img
                  src={LogoPKS}
                  className="w-[30%] object-contain"
                  alt="logo-linked"
                />
                <img
                  src={LogoSanberCode}
                  className="w-[30%] object-contain"
                  alt="logo-linked"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
