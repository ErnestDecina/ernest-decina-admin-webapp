import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import '../assets/styles/App.css';

function PrivateRoutes() {
    let auth = {'token': true}
    return (
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default PrivateRoutes;