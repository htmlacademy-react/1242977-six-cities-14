import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type TProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

function PrivateRoute({restrictedFor, redirectTo, children}:TProtectedRouteProps) {
  const authorizationStatus = AuthorizationStatus.NoAuth;
  return (
    restrictedFor === authorizationStatus ? (<Navigate to={redirectTo}/>) : (children)
  );
}

export default PrivateRoute;
