import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import './App.css';
import Home from './page/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './page/userList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/ProductList';

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
          <Route path='/user/:userId'>
            <User/>
          </Route>
          <Route path='/newUser'>
            <NewUser/>
          </Route>
          <Route path='/products'>
            <ProductList/>
          </Route>
          <Route path='/product/:productId'>
            <NewUser/>
          </Route>
          <Route path='/newproduct'>
            <NewUser/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
