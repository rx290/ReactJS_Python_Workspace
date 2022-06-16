import 'typeface-roboto';
// import './App.css';
import Header from './components/header';
import SiteInfo from './components/main';
import Footer from './components/footer';
import "./css/simple_web.css"


function App() {
  return (
    <div className="body">
      <Header />
      <SiteInfo />
      <Footer />
     </div>
  );
}

export default App;
