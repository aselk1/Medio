
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const NavBar = () => {

  const [navBar, setNavBar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })


  return (
    <div className={navBar ? 'navigation-container active' : 'navigation-container'}>
      <div className='nav-bar-container'>
        <div className='nav-bar'>
          <img className="logo" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo" />
          <ul className='navigation'>
            <NavLink className='navigation-text' to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
            <NavLink className='navigation-text' to='/login' exact={true} activeClassName='active'>
              Sign In
            </NavLink>
            <NavLink className='navigation-text' to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
            <button id='get__started'><NavLink id='get-started-text' to='/sign-up' exact={true} activeClassName='active'>
              Get Started
            </NavLink></button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
