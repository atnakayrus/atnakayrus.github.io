import ProjectCard from "@/components/projectCard";
import { groupProjects, personalProjects } from "./data";

export default function Portfolio() {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-wrap justify-center">
          {groupProjects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
        </div>
      <div className="shadowdown p-4">
        <p className="text-3xl ">PERSONAL PROJECTS</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {personalProjects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}
