import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import TopFooter from './components/TopFooter';
import Partners from './components/Partners';
import Popularcourses from './components/Popularcourses';
import WhyUs from './components/Whyus';
import TopCathegories from './components/TopCathegories';
import OurMentors from './components/Ourmentors';
function App() {
  return (
    <BrowserRouter>
  <Header/>
  <Routes> 
   <Route path='/' element={< Home/>}/>
  </Routes>
  <Popularcourses/>
  <OurMentors/>
  <TopCathegories/>
  <WhyUs/>
  <Partners/>
  <TopFooter/>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
