import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Customer from "./containers/Customer";
import Reports from "./containers/Reports";
import Settings from "./containers/Settings";
 


function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        
        <Route path="/" element={<Dashboard />} >
        <Route path="/Customer" element={<Customer />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

