import { useSelector, useDispatch } from 'react-redux';
import { closeFullScreen } from '../Features/ProjectFullScreen';
import { projectsData } from '../Data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'

export default function FullScreenProject() {

  const selectedProject = useSelector((state) => state.ProjectFullScreen.value);
  const dispatch = useDispatch();

  if (selectedProject === null) {
    return null;
  }

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
        <h4>{project.title}</h4>
        <h5 className='projec-date'>{project.date}</h5>
        <p>{project.fullDetails}</p>
        <div className="project-links">
          <a href="#"className="link-project">
          <FontAwesomeIcon icon={faGithub}/>
            View Code
          </a>
          <a href="#"className="link-project">
            <FontAwesomeIcon icon={faTowerBroadcast} />
            View Live App
          </a>
        </div>
      </div>
    </div>
  );
};

