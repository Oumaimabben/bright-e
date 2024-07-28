import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from "../assets/Logo1.png";
import dashboardIcon from '../assets/element-4.svg';
import usersIcon from '../assets/profile-2user.svg';
import mentorsIcon from '../assets/teacher.svg';
import coursesIcon from '../assets/document-copy.svg';
import discussionIcon from '../assets/note.svg';
import scheduleIcon from '../assets/calendar.svg';
import certificatesIcon from '../assets/document-text.svg';
import accountIcon from '../assets/Mentor.png';

const menuItems = [
  { href: '/dashboard', title: 'Dashboard', icon: dashboardIcon },
  { href: '/users', title: 'Users', icon: usersIcon },
  { href: '/mentors', title: 'Mentors', icon: mentorsIcon },
  { href: '/coursesdash', title: 'Courses', icon: coursesIcon },
  { href: '/discussion', title: 'Discussion', icon: discussionIcon },
  { href: '/schedule', title: 'Schedule', icon: scheduleIcon },
  { href: '/certificates', title: 'Certificates', icon: certificatesIcon },
  { href: '/account', title: 'Account', icon: accountIcon },
];

const Sidebar = () => (
  <aside className="bg-white w-72 h-screen p-6 shadow-md">
    <div className="logo flex justify-center mb-6">
      <img src={logo1} alt="logo" width={125} height={38} className="object-contain" />
    </div>
    <nav>
      <ul>
        {menuItems.map(({ href, title, icon }) => (
          <li key={title} className="m-2">
            <NavLink
              to={href} 
              className={({ isActive }) =>
                `hoverEffect flex items-center p-2 text-gray-500 transition duration-300 ${
                  isActive ? 'font-semibold bg-gray-50 border-b-2 border-purple-400 text-gray-700' : ''
                }`
              }
            >
              <img src={icon} className="h-6 mr-4" alt={title} />
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="bg-red-400 text-white py-2 px-4 mt-6 w-full">Log out</button>
    </nav>
  </aside>
);

export default Sidebar;
