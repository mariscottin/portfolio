import React, { useState } from 'react';
import { Zoom } from 'react-reveal';
import ReactLoading from 'react-loading';
import emailjs from 'emailjs-com';

import './Contact.css';
const Contact = () => {
    const [isLoading, setIsLoading ] = useState(false);
    const [ messageSent, setMessageSent ] = useState(false);
    const [ userName, setUserName ] = useState();
    const [ userEmail, setUserEmail ] = useState();
    const [ userMessage, setUserMessage ] = useState();
    const [ missingName, setMissingName ] = useState(false);
    const [ missingEmail, setMissingEmail ] = useState(false);
    const [ missingMessage, setMissingMessage ] = useState(false);


    const formSubmit = (e) => {
        e.preventDefault();
        if(!userName || userName === ''){
            setMissingName(true);
        }
        if(!userEmail || userEmail === ''){
            setMissingEmail(true);
        }
        if(!userMessage || userMessage === ''){
            setMissingMessage(true);
        }
        if(userName && userName !== '' && userEmail && userEmail !== '' && userMessage && userMessage !== ''){
            setIsLoading(true);
            emailjs.sendForm('gmail', 'portfolio', e.target, 'user_kRYTK0s5gHq9XBkGL69xv')
                .then(() => {
                    setMessageSent(true);
                }, (error) => {
                    console.log(error.text);
                    window.alert('Something went wrong sending the message. Please try again!')
                })
                .then(() => {
                    setMessageSent(true);
                    setIsLoading(false);
                    setUserName();
                    setUserEmail();
                    setUserMessage();
                });
        }
    }
    return (
        <div id='contactSection' className='section contact-section'>
            <div className="title contact-title">
                    {!messageSent ? 
                    <Zoom>
                        <h1>Let's talk!</h1>
                    </Zoom>
                    :
                    <h1>Message Sent Successfully!</h1>
                    }
                    {!messageSent ?
                    <Zoom>
                        <h3>Fill up the form below or send an email to <a href="mailto:nicolas.mariscotti93@gmail.com">nicolas.mariscotti93@gmail.com</a> to get in touch</h3>
                    </Zoom>
                    :
                    <>
                    <h3>Thank you! I will be replying as soon as I can!</h3>
                    <p className="send-another-message" onClick={()=>setMessageSent(false)}>Send another message?</p>
                    </>
                    }
            </div>
            {!messageSent &&
            <div className="contact-form__container">
                <Zoom>
                    <form className="contact-form" onSubmit={(e) => formSubmit(e)}>
                        <div className="name-email-input__container">
                            <div className="name-input__container">
                                <input className={missingName && 'missing-input'} type="text" placeholder="Your name" name='user_name' onChange={(e)=> {
                                    setUserName(e.target.value)
                                    setMissingName(false)
                                    }}/>
                                {missingName &&
                                    <p className="required-input-message">Please fill up your name!</p>
                                }
                            </div>
                            <div className="email-input__container">
                                <input className={missingEmail && 'missing-input'} type="email" placeholder="your@email.com" name="user_email" onChange={(e)=>{
                                    setUserEmail(e.target.value)
                                    setMissingEmail(false)
                                    }}/>
                                {missingEmail &&
                                    <p className="required-input-message">Please fill up your Email!</p>
                                }
                            </div>
                        </div>
                        <div className="message-input__container">
                            <textarea className={missingMessage && 'missing-textarea'} placeholder="Your message" name='user_message' onChange={(e)=>{
                                setUserMessage(e.target.value)
                                setMissingMessage(false)
                                }}/>
                            {missingMessage &&
                                <p className="required-input-message">Please fill up your message!</p>
                            }
                        </div>
                        <div className="send-btn__container">
                            {isLoading &&
                            <div className="loading-spinner__container">
                                <ReactLoading type={'spin'} color={'#fff'} height={40} width={40} />
                            </div>
                            }
                            {!isLoading &&
                                <button className="send-btn">Send</button>
                            }
                        </div>
                    </form>
                </Zoom>
            </div>
            }
        </div>
    )
}

export default Contact;