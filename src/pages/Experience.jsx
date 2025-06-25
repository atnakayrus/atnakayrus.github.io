import { useEffect, useState } from "react";
import { loadExperiencePage } from "../logic/supabase_page_data";

const Experience = () => {
  const [workExp, setWorkExp] = useState(null);
  const [personalExp, setPersonalExp] = useState(null);

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    const { work_data, personal_data } = await loadExperiencePage();
    console.log(work_data, "work");
    console.log(personal_data, "personal");
    setWorkExp(work_data);
    setPersonalExp(personal_data);
  };

  return (
    <div className="Experience">
      <div className="shadowdown">
        <h1 className="heading">WORK EXPERIENCE</h1>
      </div>
      <div className="container">
        {workExp &&
          workExp.map((exp) => {
            return (
              <>
                <div className="titlebox">
                  <p className="title">{exp.title}</p>
                  <p className="timeline">{exp.timeline}</p>
                </div>
                {exp.points && 
                <ol>
                  {exp.points.map((point) => {
                    return <li>● {point}</li>;
                  })}
                </ol>}
              </>
            );
          })}
      </div>
      <div className="shadowdown">
        <h1 className="heading">POSITION OF RESPONSIBILTY</h1>
      </div>
      <div className="container">
        {personalExp &&
          personalExp.map((exp) => {
            return (
              <>
                <div className="titlebox">
                  <p className="title">{exp.title}</p>
                  <p className="timeline">{exp.timeline}</p>
                </div>
                {exp.points && 
                <ol>
                  {exp.points.map((point) => {
                    return <li>● {point}</li>;
                  })}
                </ol>}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Experience;
