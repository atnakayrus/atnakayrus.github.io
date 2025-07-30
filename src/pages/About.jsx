import { useEffect, useState } from "react";
import { loadAboutPage } from "../logic/supabase_page_data";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [about_data, setAboutData] = useState(null);
  const [edu_data, setEduData] = useState(null);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const {about_data:about_data_new, edu_data:edu_data_new} = await loadAboutPage();
    console.log(about_data_new, edu_data_new);
    setAboutData(about_data_new);
    setEduData(edu_data_new);
  };

  return (
    <div className="About">
      <div className="AboutMe">
        <div>
          <img
            className="myPic"
            src={about_data ? about_data.image : null}
            alt="This is how i look ig? oh wait , if you are seeing this message then you are probably not seeing my face ;)"
          />
        </div>
        <div className="AboutText">
          <h2 className="Title">About Me</h2>
          <br />
          <ReactMarkdown>{about_data ? about_data.about_me : ""}</ReactMarkdown>
        </div>
      </div>
      <div className="Education">
          <h2 className="Title">Education</h2>
          
          <div className="EduList flex-row flex flex-wrap w-full">
            {edu_data &&
              edu_data.map((skill) => {
                return (
                  <div className="Edu">
                    <div className="EduTitle">
                      <div className="title">{skill.title}</div>
                      <div className="timeline">{skill.timeline}</div>
                    </div>
                    <div className="EduSubtitle">
                      <div className="subtitle">{skill.subtitle}</div>
                      <div className="score">{skill.score}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <br />
          <br />
        </div>
      </div>
  );
};

export default About;
