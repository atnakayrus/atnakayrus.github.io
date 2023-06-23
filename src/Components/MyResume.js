const myResume = () => {
  return (
    <div className="myResume section sBlue">
      <div className="flex flex-row w-full h-full limit">
        <div className="flex w-1/2 h-full">
          <div className=" flex flex-col resumeText self-center p-20 pl-0 mx-auto">
            <p className=" text-3xl">Hey there!</p>
            <p className="text-2xl font-bold">
              I am Surya Kanta Ghosh , aka Atnakayrus
            </p>
              <p className="text-xl">A web and app developer from India</p>
            <br />
            <p>To know more about me :</p>
            <div className="resumeButtons flex flex-row w-full">
              <button className="resumeButton bg-[#111111] text-white px-5 py-2 rounded-full mx-auto my-5">
                My Resume
              </button>
              <button className="resumeButton bg-[#111111] text-white px-5 py-2 rounded-full mx-auto my-5">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2  h-full self-center">
          <div className="quote p-12 ml-auto flex self-center ">
            <p className="quoteText font-bold text-2xl text-white w-auto text-center">
              Measuring programming progress by lines of code is like measuring
              aircraft building progress by weight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myResume;
