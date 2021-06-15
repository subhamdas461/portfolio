import {useState} from 'react';

import styled from "styled-components"

const Address = styled.a`
    display: block;
    font-family: "koho",sans-serif;
    color: #c9ccdb;
    margin: 8px 0;
    text-decoration: none;
    font-size: 14px;

`
const ContactDiv = styled.div`
    color: red;
    padding: 10px;
`

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
    const sendMessage = (e)=>{
        e.preventDefault();
        const msgObject = {
            name,
            email,
            message
        }
        fetch("http://localhost:5000/message",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(msgObject)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log("Error",err))
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
                    
                <ContactDiv className="address">

                    <Address href="mailto:subhamdas461@gmail.com">
                        <i className="fas fa-envelope"></i>
                        &nbsp; subhamdas461@gmail.com
                    </Address>
                    <Address href="tel:8787305963">
                        <i className="fas fa-phone-alt"></i>
                        &nbsp; +91 8787305963
                    </Address>
                    <Address href="http://maps.google.com/?q=Tezu,Arunachal Pradesh,792001">
                        <i className="fas fa-map-marker-alt"></i>
                        &nbsp; Tezu, IN, 792001
                    </Address>
                </ContactDiv>
                </div>
        </div>
    )
}
export default Contact