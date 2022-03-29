import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Match from './components/Match';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPass from './components/ForgotPass';
import EditProfile from './components/EditProfile';
// import key from './asset/icon/key.svg'

const App = () => {
  const [isLogged, setLogged] = useState(false)
  return (
    <Router>
      <div className="App">
        <Navigation isLogged={isLogged} />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/pertandingan' element={isLogged ? <Match /> : <Navigate to='/' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<ForgotPass />} />
          <Route path='/profile' element={<EditProfile />} />
          {/* <Route component={Error}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
