import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LogoutButton from './components/auth/LogoutButton';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/home' exact={true}>
          <SideBar />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavBar />
          <div className='splash'>
            <div className="header">
              <h2 className='title'>
                  Stay&nbsp;curious.
              </h2>
              <p className="header__text">
                  Discover stories, thinking, and expertise from writers on any topic.
              </p>
              <button className="start__reading" type="button">
                <NavLink className='start-reading-text' to='/sign-up' exact={true} activeClassName='active'>Start reading</NavLink>
              </button>
          </div>
          <div class="medium__Ms">
            <img class="screenshot" id="m1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <img class="screenshot" id="m10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m17" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m19" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m21" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m22" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m23" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m27" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m29" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m31" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m33" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m38" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m39" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m41" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m46" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m47" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m49" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m51" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m53" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m54" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m57" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m58" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m59" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m61" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m62" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m63" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m65" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m66" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m67" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m68" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m69" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m71" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m73" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m74" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m76" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m77" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m78" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m79" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m81" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m82" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m83" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m84" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m85" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m86" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m87" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m88" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m89" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m90" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m91" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m92" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m93" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m94" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m95" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m11" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m13" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m17" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m18" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m19" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m21" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m22" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m23" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m26" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m27" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m29" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m31" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m33" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m34" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m36" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m37" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m38" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m39" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m41" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m42" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m43" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m44" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m46" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m47" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m49" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m51" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m53" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m54" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m56" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m57" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m58" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m59" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m61" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m62" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m63" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m65" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m66" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m67" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m68" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m69" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m71" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m72" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <br />
            <br />
            <img class="screenshot" id="m73" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m74" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m76" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m77" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m78" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m79" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m81" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m82" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            <img class="screenshot" id="m83" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/LetterM.svg/1200px-LetterM.svg.png" alt="background-image" />
            </div>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
