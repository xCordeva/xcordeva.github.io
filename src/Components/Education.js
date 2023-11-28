import '../Styles/Education.css';
import useAddClasses from '../Custom Hooks/useAddClasses'

export default function Education() {

    useAddClasses('education-h1')
    useAddClasses('education-h3')

  return ( 
    <div className='eduction'>

        <h1 id='education-h1' className='floaty'>Education</h1>
        <h3 id='education-h3' className='floaty'>My eventful education journey</h3>

        <div className="education-container">
          I hold a Bachelor's degree in Civil Engineering from Cairo University, it all started with a C++ course which made me interested in the coding world. The mathematical foundation from various courses facilitated a smooth transition into problem-solving in programming. I decided to dive into frontend development, I became a self-taught developer through lots of tutorials, courses, and experimenting. Through the analytical skills I acquired in engineering and the self learning merged together it formed a strong foundation of coding skills. Today, as a frontend developer, I draw on this diverse educational background to craft digital experiences and solve problems creatively.
        </div>

    </div>
  )
}