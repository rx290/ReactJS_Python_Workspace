import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import "./contact.css"


const Contact = () => {
    return (
        <div  id="#contact" className="container contact-container">
            <h1>contact me</h1>
            <div className="contact-links">
                <a href="https://www.youtube.com/c/TTB_Official" target="_blank" rel="noreferrer" className="contact youtube">
                <AiOutlineYoutube className="icon"/>
                <h2>youtube <span>Creative Ambition</span></h2>
                </a>
            

                <a href="https://wa.me/+923414180647" target="_blank" rel="noreferrer" className="contact whatsapp">
                <AiOutlineWhatsApp className="icon"/>
                <h2>whatsapp <span>+923 414 180647</span></h2>
                </a>
            
                <a href="instagram/digi.drago" target="_blank" rel="noreferrer" className="contact instagram">
                <AiOutlineInstagram className="icon"/>
                <h2>Instagram <span>digi.drago</span></h2>
                </a>
            </div>
        </div>
        );
}
 
export default Contact;