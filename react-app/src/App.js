import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import StoryForm from './components/story/StoryForm';
import Stories from "./components/story/Stories";
import StoryDetails from './components/story/StoryDetails';
import MainPage from './components/MainPage';
import FollowFeed from './components/Feed/FollowFeed/FollowFeed';

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
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
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path="/new-story" exact={true}>
          <StoryForm />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/stories" exact={true}>
          <Stories />
        </Route>
        <Route path='/test'>
          <FollowFeed />
        </Route>
        <Route path="/storyDetails">
          <StoryDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
