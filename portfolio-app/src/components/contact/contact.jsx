import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import "./contact.css"


const Contact = () => {
    return (
        <div className="container contact-container">
            <h1>contact me</h1>
            <div className="contact-links">
                <a href="" className="contact youtube">
                <AiOutlineYoutube className="icon"/>
                <h2>youtube <span>Creative Ambition</span></h2>
                </a>
            </div>

            <div className="contact-links">
                <a href="" className="contact whatsapp">
                <AiOutlineWhatsApp className="icon"/>
                <h2>whatsapp <span>+923 414 180647</span></h2>
                </a>
            </div>

            <div className="contact-links">
                <a href="" className="contact instagram">
                <AiOutlineInstagram className="icon"/>
                <h2>Instagram <span>digi.drago</span></h2>
                </a>
            </div>
        </div>
        );
}
 
export default Contact;