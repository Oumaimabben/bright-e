import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';


import Auth from './components/Auth';
import Courses from './pages/Courses';
//import Popup from './components/Popup';
function App() {
  return (
    <BrowserRouter>
  <Header/>
  
  <Routes> 
   <Route path='/' element={< Home/>}/>
   <Route path="/signup" element={<Auth/>} />
   <Route path="/courses" element={<Courses/>} /> 
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
