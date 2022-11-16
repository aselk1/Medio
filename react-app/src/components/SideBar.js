import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./Navigation.css"

const SideBar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
    console.log("opening")
  }

  useEffect(() => {
    const closeMenu = () => {
      if (!showMenu) return
      setShowMenu(false)
      console.log("closing")
    }

    document.addEventListener("click", closeMenu)
    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  return (
    <div className='sideBar'>
      <NavLink to='/home' exact={true} activeClassName='active'><img className='home-logo' src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="logo" /></NavLink>
      <div>
        <NavLink to='/home' exact={true} activeClassName='active'><i id="icon2" class="fa-solid fa-house-chimney"></i></NavLink>
      </div>
      <div>
        <NavLink to='/stories' exact={true} activeClassName='active'><i id="icon3" class="fa-regular fa-file-lines"></i></NavLink>
      </div>
      <div>
        <NavLink to='/new-story' exact={true} activeClassName='active'><i id="icon4" class="fa-regular fa-pen-to-square"></i></NavLink>
      </div>
      <div className='dropdown-container'>
        <i onClick={openMenu} id="icon5" class="fa-solid fa-ellipsis"></i>
        {showMenu && <div class="dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>

        document.addEventListener("click", closeMenu)
        return () => document.removeEventListener("click", closeMenu)
      }, [setShowMenu])

    return (
        <div className='sideBar'>
                <NavLink to='/home' exact={true} activeClassName='active'><img className='home-logo' src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="logo" /></NavLink>
              <div>
                <NavLink to='/home' exact={true} activeClassName='active'><i id="icon2" class="fa-solid fa-house-chimney"></i></NavLink>
              </div>
              <div>
                <NavLink to='/stories' exact={true} activeClassName='active'><i id="icon3" class="fa-regular fa-file-lines"></i></NavLink>
              </div>
              <div>
                <NavLink to='/new-story' exact={true} activeClassName='active'><i id="icon4" class="fa-regular fa-pen-to-square"></i></NavLink>
              </div>
              <div className='dropdown-container'>
                <i onClick={openMenu} id="icon5" class="fa-solid fa-ellipsis"></i>
                {showMenu && <div class="dropdown">
                <ul>
                  <li>Home</li>
                  <li>Profile</li>
                  <li>Followers</li>
                  <li><LogoutButton /></li>
                </ul>
               </div>
                }
              </div>
          </div>
    )
}

export default SideBar;
