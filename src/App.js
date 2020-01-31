import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Import Private route
import PrivateRoute from './Utils/PrivateRoute';

// importing Contexts
import ChildContext from "./contexts/ChildContext";
import FoodContext from "./contexts/FoodContext";
import UserContext from "./contexts/UserContext";

// importing Page Components
import Nav from './Components/Layout/Nav';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import Footer from './Components/Pages/Footer';
import ChildPage from './Components/Pages/ChildPage';

// Importing UserPage Components
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import Logout from './Components/User/Logout';
import UserPage from './Components/User/UserPage';

// Importing FormPage Components

import FoodForm from './Components/User/foodForm';
import AddChild from './Components/User/addChild';


function App() {
  return (
    <div className="App">
      <UserContext.Provider> 
        <ChildContext.provider>
          <Route path='/' component={Nav} />
          <div className='content'>
          <h2> Welcome to Gigapet</h2>
          <p>If you see this, everything is running!</p>
          </div>
          

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/api/auth/login' component={Login} />
            <Route exact path='/api/auth/register' component={Register} />
            <PrivateRoute exacth path='/api/users/:id/children' component={UserPage} />
            {/* <PrivateRoute exact path='/api/' component={AddChild} /> */}
            <PrivateRoute exact path='/api/users/:id/children/:id' component={ChildPage} />
            {/* <PrivateRoute exact path='/api/' component={FoodForm} /> */}
            <PrivateRoute exact path='/logout' component={Logout} />
          </Switch>

          <Footer />
        </ChildContext.provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
