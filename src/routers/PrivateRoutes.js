import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router';
import { NavBar } from '../components/NavBar';

export const PrivateRoutes = ({isAuthenticated}) => {

    return (
        <>
            <NavBar />
            {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}