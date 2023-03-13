import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Viewer from "./components/Viewer";
import { FormContext } from './Context';
import Home from "./pages/Home";



function App() {

   const [form, setForm] = useState({
    firstName : '',
    lastName : '' ,
    contract : '',
    phone : '',
    landline:'',
    email : '',
    rfc : '',
    deliverDate:'',
    deliverHour:'',
    weeklyCost:'',
    street : '',
    exterior:'',
    interior:'',
    colony:'',
    postalNumber:'',
    alcaldia:'',
    entidad:'',
    streetF : '',
    exteriorF:'',
    interiorF:'',
    colonyF:'',
    postalNumberF:'',
    alcaldiaF:'',
    entidadF:'',
    branch:'',
    model:'',
    version:'',
    finalSale:'',
    insurance:'',
    finalSaleText:''

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