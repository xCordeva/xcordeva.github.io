import { useSelector, useDispatch } from 'react-redux';
import { closeFullScreen } from '../Features/ProjectFullScreen';
import { projectsData } from '../Data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'

export default function FullScreenProject() {

  /* getting the selected project using redux state */
  const selectedProject = useSelector((state) => state.ProjectFullScreen.value);
  const dispatch = useDispatch();

  if (selectedProject === null) {
    return null;
  }
  
  /* getting the clicked project */
  const project = projectsData[selectedProject];

  return (
    <div className="full-screen" tabIndex={-1}>

      <div className="fullscreen-project">

        <span className="close-icon" onClick={() => dispatch(closeFullScreen())}>
          &#10006;
        </span>
        <img src={project.image} alt="" />

        <div className="tags">
          {project.tags.map((tag, tagIndex) => (
            <h5 key={tagIndex}>{tag}</h5>
          ))}
        </div>

        <h2>{project.title}</h2>
        <h5 className='project-date'>{project.date}</h5>
        <p>{project.details}</p>

        <div className="project-links">
          <a href={`${project.githubLink}`} target='_blank' className="link-project">
          <FontAwesomeIcon icon={faGithub}/>
            View Code
          </a>
          <a href={`${project.liveLink}`} target='_blank' className="link-project">
            <FontAwesomeIcon icon={faTowerBroadcast} />
            View Live App
          </a>
        </div>

      </div>

    </div>
  );
};