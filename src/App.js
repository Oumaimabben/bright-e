import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './components/Auth';
import Courses from './pages/Courses';
import Dashbord from './pages/Dashbord';
import Users from './pages/Users';
import Layout from './components/Layout';
import MainLayout from './components/MainLayout';
import Mentors from './pages/Mentors';
import Coursesd from './pages/Coursesd';
import Certificates from './pages/Certificates';
import Dashboard from '../src/pages/dashboard';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <Routes>
     
     <Route
        path="/"
        element={
          <MainLayout>
            <Home />

          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Auth />
          </MainLayout>
        }
      />
      <Route
        path="/courses"
        element={
          <MainLayout>
            <Courses />
          </MainLayout>
        }
      />

     <Route
        path="/dashboard"
        element={
          <Layout>
           <Dashboard/>
          </Layout>
        }
      />
      
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
     <Route
        path="/mentors"
        element={
          <Layout>
            <Mentors/>
          </Layout>
        }
      />
      <Route
        path="/coursesdash"
        element={
          <Layout>
            <Coursesd/>
          </Layout>
        }
      />
      <Route
        path="/certificates"
        element={
          <Layout>
            <Certificates/>
          </Layout>
        }
      />
      
      <Route path="/dashbord" element={<Dashbord />} />
      <Route path="/addcourse" element={<AddCourse/>} />

    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
