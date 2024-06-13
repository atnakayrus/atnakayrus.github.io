import { groupProjects, personalProjects } from "../data";

export default function Project({ params }) {
  var project_id = params.project_id;
  var project;
  if (project_id / 100 < 2) {
    project = groupProjects[(project_id % 100) - 1];
  } else {
    project = personalProjects[(project_id % 100) - 1];
  }
  return (
    <div className="w-5/6 mx-auto p-6">
      <div className="shadowdown p-4 flex flex-row justify-between">
        <p className="text-3xl ">{project.name}</p>
        <a className="text-3xl text-blue-500 underline" href={project.link}>{project.linkText}</a>
      </div>
      <p className="text-xl p-6">{project.desc}</p>
        <p className="text-2xl p-6">Gallery</p>
      <div className="Gallery text-2xl p-6 flex flex-row flex-wrap  justify-center">
        {project.gallery.map((img)=>{
            return(
                <img src={"/assets/"+img} key={img} alt={img} className="GalleryImage"></img>
            )
        })}
      </div>
    </div>
  );
}
