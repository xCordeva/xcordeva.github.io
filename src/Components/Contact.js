import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {


    const [state, handleSubmit] = useForm("mjvqzjkk");
    if (state.succeeded) {
        return <div className="thank-you">
                    <h1>Thank you for reaching out. I'll get back to you soon!</h1>
                </div>;
    }

  return ( 
    <div className='contact'>
        <h1>Contact</h1>
        <h2>Send Me an Email!</h2>
        <div className="contact-container">
                <img className='base-env' src={require(`../Data/projects-images/interactive-comments.PNG`)} alt="" />
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder="Your name (e.g., John Doe)"></input>
                    <input type="email" name="email" id="email" placeholder="Your email (e.g., yourname@example.com)" required></input>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea name="message" id="message" placeholder="Type your message here" required></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <div className="leave-a-comment">
                        <button disabled={state.submitting}><span>SEND MESSAGE</span>
                        <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}} /></button>
                    </div>
                </form>
            </div>
    </div>
  )
}





    