import {useState} from 'react';

function Contact(){

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
    const sendMessage =()=>{
        const msgObject = {
            name,
            email,
            message
        }
        console.log(msgObject)
    }

    return(
        <div id="contact" className="contact section">
            <h1>Contact</h1>
            <div className="contact-inputs">
                <input 
                    type="text"
                    formNoValidate
                    autoComplete="off"
                    name="name" 
                    id="name-inp"
                    onChange={handleValue}
                    value={name}
                    placeholder="Name"
                />
                <input
                    formNoValidate
                    autoComplete="off"
                    type="text" 
                    name="email" 
                    id="email-inp"
                    onChange={handleValue}
                    value={email}
                    placeholder="Email"
                />
                <textarea
                    formNoValidate="false"
                    autoComplete="off"
                    cols="50"
                    rows="40"
                    name="message" 
                    id="msg-inp"
                    onChange={handleValue}
                    value={message}
                    placeholder="Message"
                />
                <button onClick={sendMessage} className="send-btn">Send</button>
                
            </div>
        </div>
    )
}
export default Contact