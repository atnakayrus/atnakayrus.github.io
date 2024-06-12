export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-between p-24 bg-[#161616]">
        <div class="flex flex-row w-11/12 h-full justify-evenly items-center">
          <div class="flex w-1/2 h-full items-center">
            <div class=" flex flex-col  self-center p-20 pl-0 mx-auto">
              <p class=" text-3xl">Hey there!</p>
              <p class="text-2xl font-bold">
                I am Surya Kanta Ghosh , aka Atnakayrus
              </p>
              <p class="text-xl">A web and app developer from India</p>
              <br />
              <p>To know more about me :</p>
              <div class="resumeButtons flex flex-row w-full ">
                <button class="resumeButton bg-[#111111] text-white px-5 py-2 rounded-full mx-auto my-5">
                  My Resume
                </button>
                <button class="resumeButton bg-[#111111] text-white px-5 py-2 rounded-full mx-auto my-5">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div class="flex w-1/2  h-full self-center items-center">
            <div class="quote p-12 ml-auto flex self-center ">
              <p class="quoteText font-bold text-2xl text-white w-auto text-center">
                Measuring programming progress by lines of code is like
                measuring aircraft building progress by weight.
              </p>
            </div>
          </div>
        </div>
    </main>
  );
}
