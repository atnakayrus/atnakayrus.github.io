export default function Profile() {
  return (
    <>
      <div className="flex flex-row w-5/6 mx-auto p-6">
        <div>
          <img
            className="myPic"
            src="/assets/mypic.jpeg"
            alt="This is how i look ig? oh wait , if you are seeing this message then you are probably not seeing my face ;)"
          />
        </div>
        <div className="flex flex-col w-full px-16 py-8">
          <p className="text-3xl text-center">About Me</p>
          <br />
          <p className="text-xl text-center">
            Hey There , I am a 22 year old software developer from India. I am
            currently completing my bachelors in technology from Jawaharlal
            Nehru University, New Delhi, India. My main area of expertise lies
            in front end development for android apps using Flutter , and for
            web using ReactJS and NextJS , as a matter of fact this website is
            made using NextJS
            <br />
            <br />
            Apart from programming , I love to play video games and read comics
            in my free time. My favourite games include Minecraft, Terraria,
            Stardew Valley. I have also been trying my hand at game development
            using Flutter as well as Unity , trying to find out the perfect way
            to combine both of them to create the best android game experience.
          </p>
        </div>
      </div>
      <div className="flex-col self-center w-5/6 mx-auto p-6">
        <div className="mx-auto">
          <p className="text-4xl font-bold text-center">My Skills</p>
          <br />
          <div className="SkillList flex-row flex flex-wrap w-full">
            <div className="flex flex-col w-1/2 WebD p-4">
              <p className="font-bold text-2xl text-center">
                Front End WebDev - React and Next
              </p>
              
              <p className="text-xl">
                &gt;  Proficient in front end web development using core html
                and css
              </p>
              <p className="text-xl">
                &gt;  Good grasp of front end development in React and Next
              </p>
              <p className="text-xl">
                &gt;  Good understanding of User Interface and User Experience (UI/UX)
              </p>
            </div>
            <div className="flex flex-col w-1/2 AppD p-4">
              <p className="font-bold text-2xl text-center">
                Android Development using Flutter
              </p>
              <p className="text-xl">
                &gt;  Full Stack android development using Flutter
              </p>
              <p className="text-xl">
                &gt;  Good grasp of MaterialUI for Front end and Hive and FireBase
                for Back end
              </p>
            </div>
            <div className="flex flex-col w-1/2 CPDSA p-4">
              <p className="font-bold text-2xl text-center">
                Competitive Coding using DS and Algorithms
              </p>
              <p className="text-xl">
                &gt;  Good grasp of coding foundations such as Data Structures and
                Algorithms
              </p>
              <p className="text-xl">
                &gt;  Proficient in languages : Java, Python , C , JavaScript ,
                Dart , HTML , CSS
              </p>
              <p className="text-xl">
                &gt;  4 star coder (highest rating 1927) in CodeChef , a
                competitive coding platform
              </p>
            </div>
            <div className="flex flex-col w-1/2 Misc p-4">
              <p className="font-bold text-2xl text-center">Miscellaneous</p>
              <p className="text-xl">
                &gt;  Data analysis using python, Pandas, NumPy, and matplotlib
              </p>
              <p className="text-xl">
                &gt;  Machine Learning and Artificial Intelligence Basics
              </p>
              <p className="text-xl">&gt;  Android Game Development Using Unity</p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
