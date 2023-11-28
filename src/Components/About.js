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
          <h2>I am a Frontend Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores magni aspernatur id dignissimos nihil laboriosam, quasi adipisci modi reiciendis? Quam quis id officia voluptatibus omnis, fuga dolorum non aperiam maiores debitis dolorem eius tempore dolor dignissimos voluptate voluptas, corrupti corporis quae. A nostrum esse cum quod, nobis blanditiis odit.</p>
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
