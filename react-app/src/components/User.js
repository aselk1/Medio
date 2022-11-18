import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import * as followActions from '../store/follower'
import './User.css'

function User() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const sessionUser = useSelector(state => state.session.user)
  const { userId } = useParams();
  const [following, setFollowing] = useState(false)

  const handleClick = () => {
    if (!following) {
      dispatch(followActions.follow(sessionUser.id, user.id))
        .then(() => setFollowing(true))
    } else {
      dispatch(followActions.unfollow(sessionUser.id, user.id))
        .then(() => setFollowing(false))
    }
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

  if (!sessionUser) {
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
                    <div className='user-name'>
                      <span>{user.username}</span>
                    </div>
                    <div className='action-bar-top' />
                    <div className='action-bar-wrapper'>
                      <div className='action-bar'>
                        <div className='action-items'>
                          <div className='for-you-action-clicked'>
                            <NavLink to={`/users/${userId}`} className='for-you-link'>
                              <p className='for-you-link-container'>
                                <span className='for-you-holder'>
                                  <button className='for-you-button'>About</button>
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
          <div className="user-info-sidebar">
            <div className="user-sidebar">
              <div className="user-info-sidebar-container">
                <div className="user-info-sidebar-holder">
                  <div className="user-info-sidebar-wrapper">
                    <div className="user-sidebar-items">
                      <NavLink to={`/users/${user.id}`} className='profile-link'>
                        <div className="profile-picture">
                          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            alt="Profile"
                            className="profile-image"
                          ></img>
                          <div className="under-image"></div>
                        </div>
                      </NavLink>
                      <div className="sb-spacer"></div>
                      <NavLink to={`/users/${user.id}`} className='profile-link'>
                        <h2 className="profile-author-name">
                          <span className="user">{user.username}</span>
                        </h2>
                      </NavLink>
                      <div className="follow-button-holder">
                        <button className={following ? "following-user-button" : "follow-user-button"} onClick={handleClick}>{following ? 'Following' : 'Follow'}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='right-sidebar'></div> */}
        </div>
      </div>
    </div>
  );
}
export default User;
