import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Connectic from "../assets/connectic.svg";

const Footer = () => {
  return (
    <div>
      <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 ">
        <div className="flex flex-col">
          <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
          <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
            <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
              <a
                aria-current="page"
                href="https://www.figma.com/file/AvLJdIWrWUYgzIFARknYnF/Find-Job-Web?type=design&node-id=0%3A1&t=fHXwCSENlmI1FT0o-1"
                className="hover:text-blue-600 text-gray-800"
              >
                Layout Figma
              </a>
              <a
                aria-current="page"
                href="https://api.whatsapp.com/send?phone=6289509046152"
                className="text-gray-800 hover:text-blue-600"
              >
                Contact Me
              </a>
            </nav>
            <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
            <div className="flex items-center gap-5 justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
              <img src={Connectic} className="w-[30px]" />
              <a
                href="https://www.instagram.com/firdi_audi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiOutlineInstagram
                  size={30}
                  className="cursor-pointer hover:text-blue-600 text-gray-800"
                />
              </a>

              <a
                href="http://github.com/firdi-audi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub
                  size={30}
                  className="cursor-pointer hover:text-blue-600 text-gray-800"
                />
              </a>
              <a
                href="http://linkedin.com/in/firdi-audi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin
                  size={30}
                  className="cursor-pointer hover:text-blue-600 text-gray-800"
                />
              </a>
            </div>
            <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
            <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
              <span className="text-gray-800">© 2023</span>
              <span className="mt-7 md:mt-1 text-gray-800">
                Created by {""}
                <a
                  className="underline hover:text-primary-gray-20 font-medium text-blue-600"
                  href="https://www.linkedin.com/in/crabiller/"
                >
                  Firdi Audi Putra
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
