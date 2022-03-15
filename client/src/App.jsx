import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Match from './components/Match';
// import key from './asset/icon/key.svg'

const App = () => {
  const [isLogged, setLogged] = useState(false)
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/pertandingan' element={isLogged ? <Match /> : <Navigate to='/' />} />
          {/* <Route component={Error}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
