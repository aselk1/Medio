import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [forButton, setForButton] = useState(true)
  const [followingButton, setFollowingButton] = useState(false)

  const forYou = () => {
    if (forButton) return
    setForButton(true)
    setFollowingButton(false)
  }

  const following = () => {
    if (followingButton) return
    setFollowingButton(true)
    setForButton(false)
  }

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='user-page-container'>
      <div className='user-page-holder'>
        <div className='user-page'>
          <SideBar />
          <main className='main-user-page'>
            <div className='user-buttons'>
              <div className='main-user-top' />
              <div className='user-action-header'>
                <div className='action-header-wrapper'>
                  <div className='action-header'>
                    <div className='action-bar-top'></div>
                    <div className='action-bar-wrapper'>
                      <div className='action-bar'>
                        <div className='action-items'>
                          <div className={forButton ? 'for-you-action-clicked' : 'for-you-action'}>
                            <NavLink to={`/users/${user.id}`} className='for-you-link'>
                              <p className='for-you-link-container'>
                                <span className='for-you-holder'>
                                  <button className='for-you-button' onClick={forYou}>For You</button>
                                </span>
                              </p>
                            </NavLink>
                          </div>
                          <div className={followingButton ? 'following-action-clicked' : 'following-action'}>
                            <NavLink to={`/users/${user.id}/following-feed`} className='following-link'>
                              <p className='following-container'>
                                <span className='following-holder'>
                                  <button className='following-button' onClick={following}>Following</button>
                                </span>
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default User;
