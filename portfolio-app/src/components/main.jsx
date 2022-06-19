import Header from './header/header';
import Navbar from './nav/nav';
import Home from './home/home';
import About from './about/about';
import Members from "./members/members";
import Contact from './contact/contact';
import Footer from './footer/footer';


const WebPage = () => {
    return (
        <>
        <div className='bg-circler1'></div>
        <div className='bg-circler2'></div>
        <Header />
        <Navbar />
        <Home />
        <About/>
        <Members/>
        <Contact/>
        <Footer/>
        </>
    );
}
 
export default WebPage;