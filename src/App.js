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
import ChildPage from './Components/User/ChildPage';

// Importing UserPage Components
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import Logout from './Components/User/Logout';
import UserPage from './Components/User/UserPage';

// Material components
import { Container } from '@material-ui/core';

// // Importing FormPage Components

// import FoodForm from './Components/User/foodForm';
// import AddChild from './Components/User/addChild';
import editChild from './Components/Children/editChild';


function App() {
    return (
      <div className="app">
          <Route path='/' component={Nav} />

          <div className='content'>
              <Container>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/api/auth/login' component={Login} />
                    <Route exact path='/api/auth/register' component={Register} />
                    <PrivateRoute exact path='/api/users/:id/' component={UserPage} />
                    {/* <PrivateRoute exact path='/api/' component={AddChild} /> */}
                    <PrivateRoute exact path='/api/users/:id/children/:id' component={editChild} />
                    <PrivateRoute exact path='/api/users/:id/children/:id' component={ChildPage} />
                    {/* <PrivateRoute exact path='/api/' component={FoodForm} /> */}
                    <PrivateRoute exact path='/logout' component={Logout} />
                  </Switch>
              </Container>

              <Footer />
          </div>
      </div>
    );
}

export default App;
