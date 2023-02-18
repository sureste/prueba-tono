import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Viewer from "./components/Viewer";
import { FormContext } from './Context';
import Home from "./pages/Home";



function App() {

   const [form, setForm] = useState({
    name : '',
    year : '',
    month : '',
    contract : '',
    phone : '',
    email : '',
    address : '',
    rfc : '',
    deliverDate:'',
    weeklyCost:''
   })


  return (
    <FormContext.Provider value={{ form, setForm }} > 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdf" element={<Viewer/>} />
      </Routes>
    </FormContext.Provider>
  );
}
export default App;