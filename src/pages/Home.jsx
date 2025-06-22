import {  useEffect , useState } from "react";
import ReactMarkdown from "react-markdown";
import { loadHomepage } from "../logic/supabase_page_data";


const Home = () => {

    const [bio,setBio] = useState(null);
    const [quote,setQuote] = useState(null);
    const [mailId,setMailId] = useState(null);
    const [resume,setResume] = useState(null);



    useEffect(()=>{
        loadPage();
        
    })
    
    const loadPage =async ()=>{
        const data =await loadHomepage();
        setBio(data.bio);
        setQuote(data.quote);
        setMailId(data.mailId);
        setResume(data.resume);
    }

    return ( 
    <div className="home">
         <div className="homebox">
            <div className="left">
              {bio && <ReactMarkdown>{bio}</ReactMarkdown>}
              <p>To know more about me :</p>
              <div className="resumeButtons flex flex-row w-full ">
                <button className="resumeButton">
                  <a href={resume?resume:""} download="cv">My Resume</a>
                </button>
                <button className="resumeButton">
                  <a href={mailId?`mailto:${mailId}`:""}>Contact Me</a>
                </button>
              </div>
          </div>
          <div className="right">
            <div className="quote">
              <div className="quoteText">
                {quote && <ReactMarkdown>{quote}</ReactMarkdown>}
              </div>
            </div>
          </div>
        </div>
    </div>
     );
}
 
export default Home;