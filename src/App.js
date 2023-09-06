import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import JoinUs from "./pages/JoinUs";
import BarberShops from "./pages/BarberShops";
import BarberShopPage from "./pages/BarberShopPage";
import CustomerSignUp from "./pages/CustomerSignUp";
import BarberShopSignUp from "./pages/BarberShopSignUp";
import {Toaster} from "react-hot-toast";
import { PrimeReactProvider } from 'primereact/api';
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NotFound from "./pages/404";
import BarberAppointments from "./pages/BarberAppointments";
import {NextUIProvider} from "@nextui-org/react";
import BarberShopAppointments from "./pages/BarberShopAppointments";
import store from "./redux/store";
import { Provider } from "react-redux";
import RoutesGuard from "./utils/guard";
import Forbidden from "./pages/403";
import BarberTeam from "./pages/BarberTeam";
import BarberShopServices from "./pages/BarberShopServices";
import ServicePage from "./pages/ServicePage";
function App() {
  return (
      <Provider store={store}>
          <NextUIProvider>
            <PrimeReactProvider>
                <Router>
                    <Toaster />
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/barber-shop/appointments' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/appointments' element={<BarberShopAppointments/>}/>
                        </Route>
                        <Route exact path='/barber-shop/team' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/team' element={<BarberTeam/>}/>
                        </Route>
                        <Route exact path='/barber-shop/services' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/services' element={<BarberShopServices/>}/>
                        </Route>
                        <Route exact path='/join-us' element={<JoinUs/>}/>
                        <Route exact path='/service/:id' element={<ServicePage/>}/>
                        <Route exact path='/barber-shops' element={<BarberShops/>}/>
                        <Route exact path='/barber-shops/:id' element={<BarberShopPage/>}/>
                        <Route exact path='/sign-in' element={<SignIn/>}/>
                        <Route exact path='/sign-up/customer' element={<CustomerSignUp/>}/>
                        <Route exact path='/sign-up/barber' element={<BarberShopSignUp/>}/>
                        <Route exact path='*' element={<NotFound/>}/>
                    </Routes>
                </Router>
            </PrimeReactProvider>
          </NextUIProvider>
      </Provider>
  );
}

export default App;
