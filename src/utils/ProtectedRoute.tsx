import React from "react";

import {Navigate, useLocation} from "react-router-dom"
import {useCookies} from "react-cookie";

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {
    const [cookies] = useCookies(['user']);
    const location = useLocation();
    const isAuthenticated = cookies.user?.token !== undefined;

    const getRedirectPath = (path: string | null) => {
        switch (path) {
            case '/auth/login':
            case '/auth/register':
                return isAuthenticated ? '/' : null;
            case '/add-question':
                return !isAuthenticated ? '/' : null;
            default:
                return null;
        }
    };

    const redirectPath = getRedirectPath(location.pathname);

    if (redirectPath) {
        return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }

    return children;

};

export default ProtectedRoute;