import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';
import Home from './page/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './page/userList/UserList';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className='container'>
      <Sidebar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/users'>
            <UserList/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
