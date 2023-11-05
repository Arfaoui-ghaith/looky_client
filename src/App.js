import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import JoinUs from "./pages/JoinUs";
import List from "./pages/barberShop/List";
import BarberShopPage from "./pages/barberShop/Details";
import CustomerSignUp from "./pages/customer/SignUp";
import BarberShopSignUp from "./pages/barberShop/SignUp";
import {Toaster} from "react-hot-toast";
import { PrimeReactProvider } from 'primereact/api';
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NotFound from "./pages/404";
import {NextUIProvider} from "@nextui-org/react";
import BarberShopAppointments from "./pages/barberShop/Appointments";
import store from "./redux/store";
import { Provider } from "react-redux";
import RoutesGuard from "./utils/guard";
import BarberTeam from "./pages/barberShop/BarberTeam";
import Services from "./pages/barberShop/Services";
import ServiceDetails from "./pages/barberShop/ServiceDetails";
import CustomerProfile from "./pages/customer/Profile";
import CustomerAppointments from "./pages/customer/Appointements";
import BarberShopProfile from "./pages/barberShop/Profile";

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
                        <Route exact path='/customer/appointments' element={<RoutesGuard authenticatedFor='customer'/>}>
                            <Route exact path='/customer/appointments' element={<CustomerAppointments/>}/>
                        </Route>
                        <Route exact path='/barber-shop/team' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/team' element={<BarberTeam/>}/>
                        </Route>
                        <Route exact path='/barber-shop/services' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/services' element={<Services/>}/>
                        </Route>
                        <Route exact path='/customer/profile' element={<RoutesGuard authenticatedFor='customer'/>}>
                            <Route exact path='/customer/profile' element={<CustomerProfile/>}/>
                        </Route>
                        <Route exact path='/barber-shop/profile' element={<RoutesGuard authenticatedFor='barber'/>}>
                            <Route exact path='/barber-shop/profile' element={<BarberShopProfile/>}/>
                        </Route>
                        <Route exact path='/join-us' element={<JoinUs/>}/>
                        <Route exact path='/service/:id' element={<ServiceDetails/>}/>
                        <Route exact path='/barber-shops' element={<List/>}/>
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
