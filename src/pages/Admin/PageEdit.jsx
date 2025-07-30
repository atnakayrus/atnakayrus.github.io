import { useEffect, useState } from "react";
import { loadAllPages } from "../../logic/supabase_page_data";
import TextareaAutosize from "react-textarea-autosize";

const PageEdit = () => {
  const [pageData, setPageData] = useState();
  const [github, setGithub] = useState();
  const [linkedin, setLinkedin] = useState();
  const [mail, setMail] = useState();
  const [quote, setQuote] = useState();
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await loadAllPages();
    console.log(data);
    setPageData(data);
    setGithub(data.github);
    setLinkedin(data.linkedin);
    setMail(data.email);
    setQuote(data.quote);
    setAbout(data.about_me);
    setSkills(data.skills);
    setImage(data.image);
  };

  return (
    <div className="PagesEdit">
      <div className="sections">
        <div className="section">
          <div className="title">GITHUB</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">LINKED IN</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">MAIL ID</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">HOME QUOTE</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">ABOUT ME</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">SKILLS</div>
          <div className="editbox">
            <TextareaAutosize
              type="text"
              className="editInput"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">IMAGE</div>
          <div className="editbox">
            <img className="self-image" src={image} alt="image here" />
            <button className="uploadPic">Upload New Photo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageEdit;
