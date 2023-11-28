import '../Styles/Skills.css';
import useAddClasses from '../Custom Hooks/useAddClasses'

export default function Skills() {

  useAddClasses('skills-h1')
  useAddClasses('skills-h3')

  return (
    <div className="skills-container">
      <h1 id='skills-h1' className='floaty'>Skills</h1>
      <h3 id='skills-h3' className='floaty'>Some of the skills that I have used and implemented on the projects I have made.</h3>
      <div className="skills">
        <div className='skills-box-wraper'>
          <h1>Frontend</h1>
          <div className="skills-frontend">
            <div className="skill-box">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" />
              <p>React JS</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux"/>
              <p>Redux</p>
            </div>
            <div className="skill-box">
              <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="nextjs"/>
              <p>Next JS</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
              <p>JavaScript</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/>
              <p>HTML</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/>
              <p>CSS</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"/>
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className='skills-box-wraper'>
          <h1>Others</h1>
          <div className="skills-others">
            <div className="skill-box">
              <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase"/>
              <p>Firebase</p>
            </div>
            <div className="skill-box">
              <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"/>
              <p>Git</p>
            </div>
            <div className="skill-box">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
              <p>GitHub</p>
            </div>
            <div className="skill-box">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop"/>
              <p>Adobe Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
