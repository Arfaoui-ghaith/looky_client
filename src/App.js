import React from "react";
import './App.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BarberShops from "./pages/BarberShops";
import BarberShopPage from "./pages/BarberShopPage";
import CustomerSignInForm from "./components/CustomerSignInForm";


function App() {
  return (
    <React.Fragment>
      <CustomerSignInForm/>
    </React.Fragment>
  );
}

export default App;
