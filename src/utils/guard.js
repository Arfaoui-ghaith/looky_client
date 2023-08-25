import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function RoutesGuard({authenticatedFor}) {

    const { userInfo } = useSelector(state => state.auth);

    console.log(userInfo);

    if(authenticatedFor === 'all' && userInfo){
        return <Outlet />
    }

    if(authenticatedFor === 'barber' && userInfo?.role === "barber"){
        return <Outlet />
    }

    if(authenticatedFor === 'customer' && userInfo?.role === "customer"){
        return <Outlet />
    }

    return <Navigate to="/sign-in" />;
}