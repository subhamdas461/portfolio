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
           
            <h1>Contact</h1>
           
           

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
                    <button onClick={sendMessage} className="send-btn">Send</button>
                    
                </div>
           
        </div>
    )
}
export default Contact