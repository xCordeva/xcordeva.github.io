import '../Styles/About.css';
import useAddClasses from '../Custom Hooks/useAddClasses'

export default function About() {

  useAddClasses('my-name')

  return (
    <div className="about-contianer">
      
      <div className="about">
        <div className="about-details">
          <h1>Hi, I am</h1>
          <h1 id='my-name' className='floaty'>Ahmed  AbdElAal</h1>
          <h2>A Frontend Developer</h2>
          <p>I am a self-taught software engineer, full-time coder, problem-solver, and professional Googler. I get my dopamine rush turning challenges into opportunities, always learning and gaining more in the software world. I spend most of my time immersed in the world of programming to become a better developer. Let's explore the endless possibilities together!</p>
          <button>Check My Resume</button>
        </div>
        <div className="about-pic">
          <img src={require(`../images/me.jpg`)} alt="me-sitting-on-the-nile" loading='lazy'/>
          <div className="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="space-ship">
          <img src={require(`../images/space-ship.gif`)}  alt="" />
        </div>
      </div>

    </div>
    
  )
}
