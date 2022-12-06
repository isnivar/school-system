import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router';

export const PublicRoutes = ({isAuthenticated}) => {

    return (
        !isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}