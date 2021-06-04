import {useState} from 'react';


function Contact(props){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleValue =(e)=>{
        const {name,value} = e.target
       
        if(name === "name"){
            setName(value)
        }
        if(name === "email"){
            setEmail(value)
        }
        if(name === "message"){
            setMessage(value)
        }
    }
    const sendMessage =(e)=>{
        e.preventDefault();
        const msgObject = {
            name,
            email,
            message
        }
        console.log(msgObject)
    }

    return(
        <div id="contact" className="contact section">
           
            <h1>Get in Touch</h1>
                <p style={{
                    color: props.mode==="light"?"black":""
                }}>Let's Connect!</p>
                <div className="contact-inputs">

                    <input 
                        type="text"
                        spellCheck="false"
                        autoComplete="off"
                        name="name" 
                        id="name-inp"
                        onChange={handleValue}
                        value={name}
                        placeholder="Name"
                    />
                    <input
                        spellCheck="false"
                        autoComplete="off"
                        type="text" 
                        name="email" 
                        id="email-inp"
                        onChange={handleValue}
                        value={email}
                        placeholder="Email"
                    />
                    <textarea
                        
                        spellCheck="false"
                        autoComplete="off"
                        name="message" 
                        id="msg-inp"
                        onChange={handleValue}
                        value={message}
                        placeholder="Message"
                    ></textarea>
                    <button onClick={sendMessage} className="send-btn">Send Message</button>
                    
                </div>
                {/* <p style={{
                    marginTop:"420px",
                    color: props.mode==="light"?"black":""
                }}>Or send me an email at <span>subhamdas461@gmail.com</span></p>
                 */}
        </div>
    )
}
export default Contact