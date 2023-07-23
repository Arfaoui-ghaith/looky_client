import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import JoinUs from "./pages/JoinUs";
import BarberShops from "./pages/BarberShops";
import BarberShopPage from "./pages/BarberShopPage";
import CustomerSignInForm from "./components/CustomerSignInForm";


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/join-us' element={<JoinUs/>}/>
            <Route exact path='/barber-shops' element={<BarberShops/>}/>
            <Route exact path='/sign-in' element={<SignIn/>}/>
        </Routes>
    </Router>
  );
}

export default App;
