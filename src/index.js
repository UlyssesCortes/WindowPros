import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Services from './Components/Services';
import OurClients from './Components/OurClients';
import Specials from './Components/Specials';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Services'
            element={<Services />}
          />
          <Route
            path='/OurClients'
            element={<OurClients />}
          />
          <Route
            path='/Specials'
            element={<Specials />}
          />
          <Route
            path='/ContactUs'
            element={<ContactUs />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


