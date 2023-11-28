import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';


export default function Contact() {

    const [messageSent, setMessageSent] = useState(false)
    const [showThanks, setShowThanks] = useState(false)
    const [slideOut, setSlideOut] = useState(false)
    const [state, handleSubmit] = useForm("xgejbjny");

    useEffect(() => {
        if (state.succeeded) {
            setMessageSent(true);

            setTimeout(() => {
                setSlideOut(true)
            }, 1000)

            setTimeout(() => {
                setShowThanks(true)
            }, 2500)
        }
    }, [state.succeeded]);

    
  return ( 
    <div className='contact'>
        <h1>Contact</h1>
        {showThanks ? (
            <div className="thank-you">
            <h1>Thank you for reaching out. I'll get back to you soon!</h1>
            </div>
        ) : (
            <h2>Send Me an Email!</h2>
        )}
        <div className="contact-container">
            <div 
            className={`env ${slideOut ? 'message-sent-full-env' : ''}`}
            style={{display: `${showThanks ? 'none': ''}`,}}
            >
                <img className={`env-base ${messageSent ? 'message-sent' : ''}`}
                src={require(`../images/env-open-nocover.png`)} alt="" />
                <img className={`env-back ${messageSent ? 'message-sent' : ''}`} src={require(`../images/env-back.png`)} alt="" />
                <img className={`env-cover ${messageSent ? 'message-sent-cover' : ''}`} src={require(`../images/env-cover.png`)} alt="" />
            </div>
            <form 
            className={`contact-form 
            ${messageSent ? 'message-sent-form' : ''}
            ${slideOut ? 'message-sent-full-form' : ''}`} 
            onSubmit={handleSubmit}
            >
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
                    <FontAwesomeIcon icon={faRocket} style={{color: "#ffffff",}} /></button>
                </div>
            </form>
        </div>
        <div className="flying-astronaut">
                <img src={require(`../images/flying-astronaut.png`)}  alt="" />
        </div>
    </div>
  )
}





    