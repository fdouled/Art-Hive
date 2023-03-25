import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SearchFilter  from './SearchFilter'
import Profile from './Profile'
import LocationFilter  from './LocationFilter'
// import LoginPageBootstrap from './loginbootstrap';

import { Nav } from './Nav'
import { Footer } from './Footer'
import OpenerPage from './OpenerPage';
import LoginPage from './login';






const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route index element={<LoginPage/> } />
        <Route path='opener' element={<OpenerPage/>} />
        <Route path='gallery' element={<SearchFilter/> } />
        <Route path='profile' element={<Profile/>} />
        <Route path='sellers' element={<LocationFilter/> } />
      

        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App