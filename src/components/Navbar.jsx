import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, Dumbbell, Apple, User, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'var(--color-orange)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: 'var(--shadow-md)'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--br-md)',
    transition: 'all 0.2s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: 'var(--color-white)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <NavLink to="/home" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <Home size={20} /> Home
        </NavLink>
        <NavLink to="/journal" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <Book size={20} /> Journal
        </NavLink>
        <NavLink to="/workout" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <Dumbbell size={20} /> Workouts
        </NavLink>
        <NavLink to="/nutrition" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <Apple size={20} /> Nutrition
        </NavLink>
        <NavLink to="/chat" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <MessageCircle size={20} /> AI Coach
        </NavLink>
        <NavLink to="/profile" style={({isActive}) => isActive ? activeLinkStyle : linkStyle}>
          <User size={20} /> Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
