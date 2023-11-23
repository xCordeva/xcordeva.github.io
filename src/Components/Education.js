import '../Styles/Education.css';
import useAddClasses from '../Custom Hooks/useAddClasses'

export default function Education() {

    useAddClasses('eduction-float')
    useAddClasses('eduction-text')

  return ( 
    <div className='eduction'>
        <h1 id='eduction-float' className='floaty'>Education</h1>
        <h3>Some of the skills that I have used and implemented on the projects I have made.</h3>
        <div className="education-container floaty" id='eduction-text'>
            Okay this is a text to test the floating styles that i stole from someone on github great job pp namsis i guess and good job me that i was abel to find it i guess Okay this is a text to test the floating styles that i stole from someone on github great job pp namsis i guess and good job me that i was abel to find it i guess Okay this is a text to test the floating styles that i stole from someone on github great job pp namsis i guess and good job me that i was abel to find it i guess Okay this is a text to test the floating styles that i stole from someone on github great job pp namsis i guess and good job me that i was abel to find it i guess
        </div>
    </div>
  )
}
