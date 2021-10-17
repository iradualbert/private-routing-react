import { Redirect, Route } from "react-router-dom";

// Restricted route 
export const AuthRoute = ({ isAuthenticated, ...props }) => {
    if (isAuthenticated) {
        return <Redirect to="/" />
    }
    return <Route {...props} />
}

export const PrivateRoute = ({ isAuthenticated, ...props }) => {
    if (!isAuthenticated) {
        return <Redirect to="/signup" />
    }
    return <Route {...props} />
}