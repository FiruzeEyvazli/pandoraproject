import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../../redux/reducers/authSlice'; // Redux action

const Profile = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);

    // Komponent yükləndikdə istifadəçi məlumatını al
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        console.log(user); // İstifadəçi məlumatını yoxla
    }, [user]);

    if (loading) return <p>Yüklənir...</p>;
    if (error) return <p style={{ color: 'red' }}>Xəta: {error}</p>;

    return (
        <div>
            <h1>Profil</h1>
            {user ? (
                <div>
                    <p>Ad: {user.name}</p>
                    <p>Soyad: {user.surname}</p>
                    <p>Email: {user.email}</p>
                    <p>Telefon Nömrəsi: {user.number}</p>
                </div>
            ) : (
                <p>İstifadəçi tapılmadı.</p>
            )}
        </div>
    );
};

export default Profile;
