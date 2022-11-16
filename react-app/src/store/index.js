import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import stories from './stories'
import storyDetails from './storyDetails'
import commentReducer from './comment'
import follower from './follower'
import { likeStoryReducer } from './likeStory';
import { likeCommentReducer } from './likeComment';

const rootReducer = combineReducers({
  session,
  stories,
  storyDetails,
  comment: commentReducer,
  follower,
  likeStory: likeStoryReducer,
  likeComment: likeCommentReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
