import { About } from "./Components/About";
import { FAQ } from "./Components/FAQ";
import ScrollToTop from "./Components/ScrollToTop";
import { LandingPage } from "./Pages/LandingPage";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { TermsAndConditions } from "./Pages/TermsAndConditions";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react'


function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='#about' element={<About/>} />
              <Route path='#FAQ' element={<FAQ/>} />
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
