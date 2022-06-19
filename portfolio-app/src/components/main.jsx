import Header from './components/header/header';
import Navbar from './components/Nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Members from "./components/members/members";
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


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