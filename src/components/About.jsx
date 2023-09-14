import Aboutone from "../assets/aboutone.png";
import AbouTwo from "../assets/abouttwo.png";
import Aboutthree from "../assets/abouttrhree.png";
import Aboutfour from "../assets/aboutfour.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const { state } = useContext(GlobalContext);

  const { refs } = state;

  return (
    <div
      className="text-center max-w-[1240px] mx-auto py-[48px] px-6 text-neutral"
      ref={refs["about"]}
    >
      <p className="text-xl text-gray-500 font-medium ">How it works?</p>
      <h1 className="lg:text-4xl text-2xl font-bold mt-4">
        Just these <span className="text-blue-600">easy steps</span> to find
        jobs with us
      </h1>
      <div className="mt-[79px] flex gap-3 max-lg:flex-wrap flex-nowrap  justify-center">
        <div className="text-left px-4  flex flex-col justify-center bg-white rounded-3xl box-border shadow-lg shadow-blue-500/10 flex-auto w-[250px] h-[200px]  ">
          <img src={Aboutone} className="w-[45px] pb-2" />
          <h3 className="text-xl font-bold">Create an Account</h3>
          <p className="mt-4 text-xs text-gray-600">
            Click the "Register" or "Create account" button, fill in the
            required information, and complete the registration process.
          </p>
        </div>
        <div className="text-left px-4  flex flex-col justify-center bg-white rounded-3xl box-border shadow-lg shadow-blue-500/10 flex-auto w-[250px] h-[200px] max-lg:mt-[0px] mt-[50px] ">
          <img src={AbouTwo} className="w-[45px] pb-2" />
          <h3 className="text-xl font-bold">Get Job</h3>
          <p className="mt-4 text-xs text-gray-600">
            Apply to job postings that align with your skills and experience,
            tailor your application to highlight your qualifications
          </p>
        </div>
        <div className="text-left px-4  flex flex-col justify-center bg-white rounded-3xl box-border shadow-lg shadow-blue-500/10 flex-auto w-[250px] h-[200px]">
          <img src={Aboutthree} className="w-[45px] pb-2" />
          <h3 className="text-xl font-bold">Search Job</h3>
          <p className="mt-4 text-xs text-gray-600">
            Search for job opportunities on reputable job search websites by
            entering relevant keywords and your desired location to find
            suitable employment options.
          </p>
        </div>
        <div className="text-left px-4  flex flex-col justify-center bg-white rounded-3xl box-border shadow-lg shadow-blue-500/10 flex-auto w-[300px] h-[200px] max-lg:mt-[0px] mt-[50px]">
          <img src={Aboutfour} className="w-[45px] pb-2" />
          <h3 className="text-xl font-bold">Upload CV/Resume</h3>
          <p className="mt-4 text-xs text-gray-600">
            Go to the employer's website or job portal, navigate to your account
            or profile section, and follow the instructions to upload your
            CV/resume.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
