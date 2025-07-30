import { useEffect, useState } from "react";
import { supabase } from "../../logic/supabase";
import Login from "./Login";
import PageEdit from "./PageEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";
import ProjectsEdit from "./ProjectsEdit";

const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

const Admin = () => {
  const [isLogged, setIsLogged] = useState(false);

  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    checkLogin();
  });

  const checkLogin = async () => {
    console.log("checkLogin");
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user && user.email == adminEmail) {
      console.log("Access Approved");
      setIsLogged(true);
    } else {
      console.log("Access Denied");
      setIsLogged(false);
    }
  };

  const onLogin = async (email, password) => {
    console.log("onLogin");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      return;
    }
    alert("Login Succesful");

    setIsLogged(true);
    console.log(email, password);
  };

  const Page = () => {
    switch (selectedPage) {
      case 0:
        return <PageEdit />;
      case 1:
        return <EducationEdit />;
      case 2:
        return <ExperienceEdit />;
      case 3:
        return <ProjectsEdit />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  if (isLogged) {
    return (
      <div className="Admin">
        <div className="SidePanel">
          <button className={selectedPage==0?"Selected PanelButton":"PanelButton"} onClick={() => setSelectedPage(0)}>
            Pages
          </button>
          <button className={selectedPage==1?"Selected PanelButton":"PanelButton"} onClick={() => setSelectedPage(1)}>
            Education
          </button>
          <button className={selectedPage==2?"Selected PanelButton":"PanelButton"} onClick={() => setSelectedPage(2)}>
            Experience
          </button>
          <button className={selectedPage==3?"Selected PanelButton":"PanelButton"} onClick={() => setSelectedPage(3)}>
            Projects
          </button>
        </div>
        <div className="MainPanel">{<Page />}</div>
      </div>
    );
  } else {
    return (
      <>
        <Login onLogin={onLogin}></Login>
      </>
    );
  }
};

export default Admin;
