import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
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

  const user = useSelector((state) => state.session.user);

  return (
    <div className='sidebar-container'>
      <nav className='sideBar'>
        <div className='sideBar sidebar'>
          <div className='sidebar-items'>
            <div className='medio-home-link'>
              <NavLink to='/home' exact={true} activeClassName='active'><img className='home-logo' src="https://miro.medium.com/max/1400/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="logo" /></NavLink>
            </div>
            <div className='user-buttons'>
              <div className=''>
                <NavLink to='/home' exact={true} activeClassName='active'><i id="icon2" class="fa-solid fa-house-chimney"></i></NavLink>
              </div>
              <div>
                <NavLink to='/stories' exact={true} activeClassName='active'><i id="icon3" class="fa-regular fa-file-lines"></i></NavLink>
              </div>
              <div>
                <NavLink to='/new-story' exact={true} activeClassName='active'><i id="icon4" class="fa-regular fa-pen-to-square"></i></NavLink>
              </div>
            </div>
            <div className='dropdown-container'>
              <i onClick={openMenu} id="icon5" class="fa-solid fa-circle-user fa-3x"></i>
              {showMenu && <div class="dropdown">
                <ul className='dropdown-text'>
                  <div>Home</div>
                  <div>Profile</div>
                  <div>Followers</div>
                  <div className='logout'><LogoutButton /></div>
                  <hr />
                  <div>{user.username}</div>
                  <div>{user.email}</div>
                </ul>
              </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideBar;
