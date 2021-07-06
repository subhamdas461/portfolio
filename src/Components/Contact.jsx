import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { animationTypes, useCustomInView } from "../obs.animation";

import styled from "styled-components";
import { useRef } from "react";
import Message from "./Message";

const Address = styled.a`
    display: flex;
    font-family: "koho", sans-serif;
    color: #c9ccdb;
    margin: 8px 0;
    text-decoration: none;
    font-size: 14px;
    align-items: center;
`;
const ContactDiv = styled.div`
    padding: 10px;
`;

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendLoad, setSendLoad] = useState(false);
    const sendButton = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();
    const [serverMsg, setServerMsg] = useState("");
    const [isServerMsg, setIsServerMsg] = useState(false);
    const [type, setType] = useState("");
    const msgObject = {
        name: checkExtraWhiteSpce(name),
        email: checkExtraWhiteSpce(email),
        message: checkExtraWhiteSpce(message),
    };
    const checkError = (input) => {
        /^\s*$/.test(input.value)
            ? input.classList.add("error-input")
            : input.classList.remove("error-input");

        if (input.name === "email") {
            //eslint-disable-next-line
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)
                ? input.classList.remove("error-input")
                : input.classList.add("error-input");
        }
    };
    const handleValue = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        }
        if (name === "email") {
            setEmail(value);
        }
        if (name === "message") {
            setMessage(value);
        }

        checkError(e.target);
    };
    function checkExtraWhiteSpce(sentence) {
        return sentence.replace(/\s+/g, " ").trim();
    }

    const sendMessage = (e) => {
        e.preventDefault();
        setSendLoad(true);
        sendButton.current.style.cursor = "not-allowed";
        sendButton.current.disabled = "true";

        checkError(nameRef.current);
        checkError(emailRef.current);
        checkError(msgRef.current);

        if (
            /^\s*$/.test(name) ||
            /^\s*$/.test(email) ||
            /^\s*$/.test(message)
        ) {
            setSendLoad(false);
            sendButton.current.style.cursor = "pointer";
            sendButton.current.disabled = false;
            return;
        }
        //eslint-disable-next-line
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log("invalid email");
            setSendLoad(false);
            sendButton.current.style.cursor = "pointer";
            sendButton.current.disabled = false;
            return;
        }

        fetch("https://portfolio-jordanhaste.herokuapp.com/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msgObject),
        })
            .then((res) => {
                setName("");
                setEmail("");
                setMessage("");
                return res.json();
            })
            .then((data) => {
                setSendLoad(false);
                sendButton.current.style.cursor = "pointer";
                sendButton.current.disabled = false;

                setServerMsg(data.msg);
                setIsServerMsg(true);
                setType(data.status);
            })
            .catch((err) => {
                setSendLoad(false);
                sendButton.current.style.cursor = "pointer";
                sendButton.current.disabled = false;
                setServerMsg("Something went wrong!");
                setIsServerMsg(true);
                setType("error");
                setName("");
                setEmail("");
                setMessage("");
            });
    };

    const [inView, ref] = useCustomInView(0.3);
    const animCon = useAnimation();
    useEffect(() => {
        if (inView) {
            animCon.start(animationTypes.rightLeft);
        }
    }, [inView, animCon]);
    useEffect(() => {
        let t_id;
        if (isServerMsg) {
            t_id = setTimeout(() => {
                setIsServerMsg(false);
                setServerMsg("");
                setType("");
            }, 6000);
        }

        return () => clearTimeout(t_id);
    }, [isServerMsg]);
    return (
        <div id="contact" className="contact section">
            <h1>Get in Touch</h1>
            <p
                style={{
                    color: props.mode === "light" ? "black" : "",
                }}
            >
                Let's Connect!
            </p>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -150 }}
                animate={animCon}
                transition={{ type: "spring", damping: 20, duration: 1 }}
                className="contact-inputs"
            >
                <input
                    ref={nameRef}
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
                    ref={emailRef}
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
                    ref={msgRef}
                    spellCheck="false"
                    autoComplete="off"
                    name="message"
                    id="msg-inp"
                    onChange={handleValue}
                    value={message}
                    placeholder="Message"
                ></textarea>
                <button
                    ref={sendButton}
                    onClick={sendMessage}
                    className="send-btn"
                >
                    {sendLoad ? (
                        <PulseLoader size="8px" color="#fff" />
                    ) : (
                        "Send"
                    )}
                </button>

                <ContactDiv className="address">
                    <Address href="mailto:subhamdas461@gmail.com">
                        <FaEnvelope />
                        <span> &nbsp; subhamdas461@gmail.com</span>
                    </Address>

                    <Address href="http://maps.google.com/?q=Tezu,Arunachal Pradesh,792001">
                        <FaMapMarkerAlt />
                        <span>&nbsp; Tezu, IN, 792001</span>
                    </Address>
                </ContactDiv>
            </motion.div>
            <AnimatePresence>
                {isServerMsg && <Message type={type} message={serverMsg} />}
            </AnimatePresence>
        </div>
    );
}

export default Contact;
