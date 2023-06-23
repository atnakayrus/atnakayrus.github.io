import myPic from "../assets/mypic.jpeg";

const MyAbout = () => {
  return (
    <div className="myAbout section sBlack w-full my-10">
      <div className="intro limit flex flex-row">
        <div>
          <img
            className="myPic"
            src={myPic}
            alt="This is how i look ig? oh wait , if you are seeing this message then you are probably not seeing my face ;)"
          ></img>
        </div>
        <div className="AboutMe flex flex-col w-full px-16 py-8">
          <p className="text-3xl text-center">About Me</p>
          <br />
          <p className="text-xl text-center">
            Hey There , I am a 21 year old software developer from India. I am
            currently completing my bachelors in technology from Jawaharlal
            Nehru University, New Delhi, India. My main area of expertise lies
            in front end development for android apps using Flutter , and for
            web using Flutter and ReactJS,
            <br />
            <br />
            Apart from programming , I love to play video games and read mangas
            in my free time. My favourite games include Minecraft, Terraria,
            Stardew Valley and Valorant. I have also been trying my hand at game
            development using Flutter as well as Unity , trying to find out the
            perfect way to combine both of them to create the best android game
            experience.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default MyAbout;
