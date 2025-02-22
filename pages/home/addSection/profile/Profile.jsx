import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logoutUser } from '../../../../redux/reducers/authSlice'; // Redux actions
import { useNavigate } from 'react-router-dom'; // useNavigate hook-u
import styless from './Profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate hook-u
    const { user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUser()).then((res) => console.log("User data:", res));
    }, [dispatch]);
    

    const handleLogout = async () => {
        // Logout funksiyasını çağırırıq
        await dispatch(logoutUser()); // Redux'dan logout funksiyası
        localStorage.removeItem('authToken'); // Tokeni localStorage-dən silmək
        navigate('/login'); // Login səhifəsinə yönləndirmək
    };

    if (loading) return <p className={styless.loading}>Yüklənir...</p>;
    if (error) return <p className={styless.error}>Xəta: {error.message}</p>;

    return (
        <div className={styless.profileContainer}>
            <h1 className={styless.title}>Profil</h1>
            {user ? (
                <div className={styless.profileDetails}>
                    <p><strong>Ad:</strong> {user.name}</p>
                    <p><strong>Soyad:</strong> {user.surname}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Telefon Nömrəsi:</strong> {user.number}</p>
                </div>
            ) : (
                <p>İstifadəçi tapılmadı.</p>
            )}
            <div className={styless.buttons}>
                <button onClick={() => navigate('/adminpanel')}>Admin Panel</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;
