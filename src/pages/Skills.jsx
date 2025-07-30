import { useEffect, useState } from "react";
import { loadSkills } from "../logic/supabase_page_data";
import ReactMarkdown from "react-markdown";

const Skills = () => {
  const [skills, setSkills] = useState();

  useEffect(() => {
    loadSkillsPage();
  }, []);

  const loadSkillsPage = async () => {
    const data = await loadSkills();
    setSkills(data.skills);
    console.log(data.skills);
  };

  return (
    <div className="Skills">
      <h2 className="title">My Skills</h2>
      {skills &&
        skills.map((skill) => {
          return (
            <div className="skill">
              <ReactMarkdown>{skill}</ReactMarkdown>{" "}
            </div>
          );
        })}
    </div>
  );
};

export default Skills;
