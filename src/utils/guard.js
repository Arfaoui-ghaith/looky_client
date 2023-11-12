import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

export default function RoutesGuard({authenticatedFor}) {

    const { userInfo } = useSelector(state => state.auth);

    if(userInfo?.token !== 'undefined' && userInfo?.token !== undefined && userInfo?.token !== null){

        const decodedToken = jwtDecode(userInfo?.token);
        const expiresAt = new Date(decodedToken.exp * 1000);

        if(new Date() > expiresAt){
            return <Navigate to="/sign-in" />;
        }

        if(authenticatedFor === 'all' && userInfo){
            return <Outlet />
        }

        if(authenticatedFor === 'barber' && userInfo?.role === "barber"){
            return <Outlet />
        }

        if(authenticatedFor === 'customer' && userInfo?.role === "customer"){
            return <Outlet />
        }
    }

    return <Navigate to="/sign-in" />;
}