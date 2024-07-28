import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './components/Auth';
import Courses from './pages/Courses';
import Dashbord from './pages/Dashbord';
import Users from './components/Users';
import Layout from './components/Layout';
import MainLayout from './components/MainLayout';
import Mentors from './components/Mentors';
import Coursesd from './components/Coursesd';
import Certificates from './components/Certificates';
import Dashboard from '../src/components/dashboard';

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
