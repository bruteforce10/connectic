const Contact = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-[1240px] mx-auto text-center px-6 md:py-16 py-10 flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-white md:text-4xl text-xl font-bold text-center md:text-left max-w-[600px]">
            Get in touch to see how can help, Sign up for our newsletter.
          </h1>
        </div>
        <div>
          <input
            style={{ color: "white", opacity: 0.7 }}
            type="email"
            className=" w-50% rounded-md border-0 md:mt-2 mt-4 text-white bg-white/5 px-6 py-3 focus:outline-none ring-1 ring-inset sm:text-sm sm:leading-6 "
            placeholder="Enter your email"
          />
          <button className="bg-white hover:bg-[#E6EEFF] duration-300 text-blue-600 px-4 py-[13.5px] text-sm rounded-md ml-3 mt-4">
            Subscribe Now
          </button>
          <p className="md:mt-2 mt-4 text-white text-sm md:text-left">
            We care about your data. Read our{" "}
            <span className="font-bold">privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
