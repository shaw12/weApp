import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Users from "./components/Users";
import News from "./components/News";
import Profile from './components/Profile';
import CreateArticle from './components/CreateArticle';
import User from './components/User';
import UpdateArticle from './components/UpdateArticle';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMyDetail } from './actions/allActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMyDetail())
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/create-post">
          <CreateArticle />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/update/:id">
          <UpdateArticle />
        </Route>
        <Route path="/">
          <News />
        </Route>
      </Switch>
  
    </Router>
  );
}

export default App;
