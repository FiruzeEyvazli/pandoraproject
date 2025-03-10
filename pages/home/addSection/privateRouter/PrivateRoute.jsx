import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth); // Redux-dan istifadəçi məlumatını alırıq

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
