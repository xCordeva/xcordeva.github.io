import "../Styles/Skills.css";
import useAddClasses from "../Custom Hooks/useAddClasses";

const frontendSkills = [
  {
    name: "JavaScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    name: "TypeScript",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    alt: "nextjs",
  },
  {
    name: "React.js",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    alt: "react",
  },
  {
    name: "Redux",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    alt: "redux",
  },
  {
    name: "Zustand",
    logo: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    alt: "Zustand",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind",
  },
  {
    name: "CSS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3",
  },
  {
    name: "SASS",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    alt: "sass",
  },
  {
    name: "HTML",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
  },
  {
    name: "Bootstrap",
    logo: "https://img.icons8.com/ios_filled/512/bootstrap.png",
    alt: "bootstrap",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    alt: "Node",
  },
  {
    name: "Express.js",
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    alt: "Express",
  },
  {
    name: "Firebase",
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    alt: "Firebase",
  },
  {
    name: "Supabase",
    logo: "https://img.icons8.com/color/512/supabase.png",
    alt: "Supabase",
  },
  {
    name: "JWT",
    logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    alt: "JWT",
  },
];
const otherSkills = [
  {
    name: "GitHub",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    alt: "GitHub",
  },
  {
    name: "Git",
    logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    alt: "git",
  },
  {
    name: "MongoDB",
    logo: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
    alt: "MongoDB",
  },
  {
    name: "Jira",
    logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    alt: "Jira",
  },
  {
    name: "Figma",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
    alt: "figma",
  },
  {
    name: "Postman",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png",
    alt: "Postman",
  },
  {
    name: "Jest.js",
    logo: "https://www.jetbrains.com/guide/assets/jest-5ee71e9b.svg",
    alt: "Jest JS",
  },
  {
    name: "WordPress",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
    alt: "WordPress",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
    alt: "photoshop",
  },
];

export default function Skills() {
  useAddClasses("skills-h1");

  return (
    <div className="skills-container">
      <h1 id="skills-h1" className="floaty">
        Skills
      </h1>
      <h3>
        Some of the skills that I have used and implemented on the projects I
        have made.
      </h3>

      <div className="skills">
        <div className="skills-box-wrapper">
          <h1>Frontend</h1>
          <div className="skills-frontend">
            {frontendSkills.map((skill) => (
              <div className="skill-box" key={skill.name}>
                <img src={skill.logo} alt={skill.alt} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-box-wrapper">
          <h1>Backend</h1>
          <div className="skills-frontend">
            {backendSkills.map((skill) => (
              <div className="skill-box" key={skill.name}>
                <img src={skill.logo} alt={skill.alt} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-box-wrapper">
          <h1>Others</h1>
          <div className="skills-others">
            {otherSkills.map((skill) => (
              <div className="skill-box" key={skill.name}>
                <img src={skill.logo} alt={skill.alt} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
