import React from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import Home from './pages/Dashboard/home';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
           <Route path="/signup" exact element={<Signup />} />
            <Route path="/dashboard" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
   
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
}