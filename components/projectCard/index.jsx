"use client";

import Link from "next/link";

export default function ProjectCard(props) {
  var project = props.project;
  return (
    <div className="w-[300px] h-[400px] m-5">
      <Link href={"/portfolio/" + project.id}>
        <div
          key={project.id}
          className="ProjectCard w-full h-full rounded-xl bg-[#333333] overflow-hidden "
        >
          <img src={"/assets/" + project.leadImg} className="" />
          <div className="shade"></div>
          <div className="content ">
            <p className="text-2xl p-4">{project.name}</p>
            <div className="spinners  flex flex-row flex-wrap">
                {
                    project.tags.map((tag)=>{
                        return(
                            <div className="spinner">{tag}</div>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
