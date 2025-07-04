import "../Styles/Projects.css";
import { projectsData } from "../Data/ProjectsData";
import { useSelector, useDispatch } from "react-redux";
import { openFullScreen } from "../Features/ProjectFullScreen";
import FullScreenProject from "./FullScreenProject";
import { useEffect } from "react";
import useAddClasses from "../Custom Hooks/useAddClasses";

export default function Projects() {
  useAddClasses("projects-h1");
  useAddClasses("projects-h3");

  const selectedProject = useSelector((state) => state.ProjectFullScreen.value);
  const dispatch = useDispatch();

  useEffect(() => {
    // Add or remove the 'scroll-disabled' class on the body based on fullscreen state
    document.body.classList.toggle("scroll-disabled", selectedProject !== null);

    // Clean up: remove the class when the component unmounts
    return () => {
      document.body.classList.remove("scroll-disabled");
    };
  }, [selectedProject]);

  return (
    <div className="projects">
      <h1 id="projects-h1" className="floaty">
        Projects
      </h1>
      <h3 id="projects-h3" className="floaty">
        Some of the projects I have created.
      </h3>

      <div className="projects-contianer">
        {projectsData.map((project, index) => (
          <div
            className="project"
            key={index}
            onClick={() => dispatch(openFullScreen(index))}
          >
            <img src={project.image} alt="screen-shot-of-project" />
            <div className="tags">
              {project.tags.slice(0, 7).map((tag) => (
                <h5 key={tag}>{tag}</h5>
              ))}
            </div>
            <h2>{project.title}</h2>
            <h5 className="project-date">{project.date}</h5>
            <p className="project-details">{project.details}</p>
          </div>
        ))}

        <FullScreenProject />
      </div>

      <div className="rocket">
        <img src={require(`../images/rocket.gif`)} alt="rocket" />
      </div>
    </div>
  );
}
