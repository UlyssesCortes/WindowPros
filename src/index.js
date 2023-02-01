import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Components/Services';
import OurClients from './Components/OurClients';
import Specials from './Components/Specials';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Window from './Components/WindowCleaning';
import Solar from './Components/Solar';
import Christmas from './Components/Christmas';

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
            path='/WindowCleaning'
            element={<Window />}
          />
          <Route
            path='/Solar'
            element={<Solar />}
          />
          <Route
            path='/Christmas'
            element={<Christmas />}
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


