import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../redux/reducers/authSlice'; // Redux action
import { useNavigate } from 'react-router-dom'; // useNavigate hook-u
import styless from './Profile.module.scss';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate hook-u
    const { user, loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUser()); // Komponent yükləndikdə istifadəçi məlumatlarını əldə et
    }, [dispatch]);

    useEffect(() => {
        console.log(user); // İstifadəçi məlumatlarını konsola yazdır
    }, [user]);

    if (loading) return <p className={styless.loading}>Yüklənir...</p>;
    if (error) return <p className={styless.error}>Xəta: {error.message}</p>;

    const handleLogout = () => {
        // Çıxış funksiyasını burada əlavə edin
        // Məsələn, istifadəçi məlumatlarını silmək və ya autentifikasiya vəziyyətini yeniləmək
        // Sonra istifadəçini giriş səhifəsinə yönləndirin
        navigate('/login');
    };

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
                <button onClick={() => navigate('/adminpanel')}>İdarə Panelinə Keç</button>
                <button onClick={handleLogout}>Çıxış</button>
            </div>
        </div>
    );
};

export default Profile;