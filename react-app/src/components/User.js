import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

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
          <main>
            <div>
              <ul>
                <li>
                  <strong>User Id</strong> {userId}
                </li>
                <li>
                  <strong>Username</strong> {user.username}
                </li>
                <li>
                  <strong>Email</strong> {user.email}
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default User;
