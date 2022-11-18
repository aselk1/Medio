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
              <div className='icon user-buttons'>
                <NavLink to='/home' exact={true} className='user-button-link'>
                  <div className='button-container'>
                    <div className='button-holder'>
                      <div className='inner-button-container'>
                        <div>
                          <div className='button-icon'>
                            <i id="icon2" className="fa-solid fa-house-chimney fa-lg"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className='icon user-buttons'>
                <NavLink to='/stories' exact={true} className='user-button-link'>
                  <div className='button-container'>
                    <div className='button-holder'>
                      <div className='inner-button-container'>
                        <div>
                          <div className='button-icon'>
                            <i id="icon3" className="fa-regular fa-file-lines fa-lg"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className='horizontal-line-container'>
                <hr className='horizontal-line' />
              </div>
              <div className='icon user-buttons'>
                <NavLink to='/new-story' exact={true} className='user-button-link'>
                  <div className='button-container'>
                    <div className='button-holder'>
                      <div className='inner-button-container'>
                        <div>
                          <div className='button-icon'>
                            <i id="icon4" className="fa-regular fa-pen-to-square fa-lg"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className='user-menu'>
              <div>
                <div className='user-buttons'>
                  <button onClick={openMenu} className='user-profile-button'>
                    <div className='dropdown-container'>
                      <div className='user-icon-holder'>
                        <div style={{ position: 'relative' }}>
                          <div className='user-icon-wrapper'>
                            <i id="icon5" className="fa-solid fa-circle-user fa-2xl"></i>
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
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SideBar;
