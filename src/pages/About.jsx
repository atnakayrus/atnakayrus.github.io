import { useEffect, useState } from "react";
import { loadAboutPage } from "../logic/supabase_page_data";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const pageData = await loadAboutPage();
    console.log(pageData);
    setData(pageData);
  };

  return (
    <div className="About">
      <div className="AboutMe">
        <div>
          <img
            className="myPic"
            src={data ? data.image : null}
            alt="This is how i look ig? oh wait , if you are seeing this message then you are probably not seeing my face ;)"
          />
        </div>
        <div className="AboutText">
          <h2 className="Title">About Me</h2>
          <br />
          <ReactMarkdown>{data ? data.about_me : ""}</ReactMarkdown>
        </div>
      </div>
      <div className="Skills">
        <div className="mx-auto">
          <h2 className="Title">My Skills</h2>
          <br />
          <div className="SkillList flex-row flex flex-wrap w-full">
            {data &&
              data.skills.map((skill) => {
                return (
                  <div className="Skill">
                    <ReactMarkdown>{skill}</ReactMarkdown>
                  </div>
                );
              })}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
