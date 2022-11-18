import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import StoryForm from "./components/story/StoryForm";
import Stories from "./components/story/Stories";
import StoryDetails from "./components/story/StoryDetails";
import SplashPage from "./components/SplashPage";
import FollowFeed from "./components/Feed/FollowFeed/FollowFeed";
import EditStoryForm from "./components/story/EditStoryForm";
import Home from "./components/Home";
import { ModalProvider } from "./context/Modal";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
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
    <div className="medio-body">
      <ModalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {user != null ? <Redirect to="/home" /> : <SplashPage />}
            </Route>
            <Route exact path="/home">
              {user === null ? <Redirect to="/" /> : <Home />}
            </Route>
            <ProtectedRoute path="/new-story" exact={true}>
              <StoryForm />
            </ProtectedRoute>
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
              <Stories user={user} />
            </Route>
            <Route path="/users/:userId/following-feed">
              <FollowFeed />
            </Route>
            <Route path="/stories/:id" exact={true}>
              <StoryDetails />
            </Route>
            <Route path="/stories/:storyId/edit">
              <EditStoryForm />
            </Route>
          </Switch>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}

export default App;
