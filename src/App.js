import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import JoinUs from "./pages/JoinUs";
import BarberShops from "./pages/BarberShops";
import BarberShopPage from "./pages/BarberShopPage";
import CustomerSignInForm from "./components/CustomerSignInForm";
import CustomerSignUp from "./pages/CustomerSignUp";
import BarberShopSignUp from "./pages/BarberShopSignUp";


function App() {
  return (

    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/join-us' element={<JoinUs/>}/>
            <Route exact path='/barber-shops' element={<BarberShops/>}/>
            <Route exact path='/sign-in' element={<SignIn/>}/>
            <Route exact path='/sign-up/customer' element={<CustomerSignUp/>}/>
            <Route exact path='/sign-up/barber' element={<BarberShopSignUp/>}/>
        </Routes>
    </Router>
  );
}

export default App;
