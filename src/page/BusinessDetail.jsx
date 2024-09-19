import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses } from '../components/businessSlice';

const BusinessDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const business = useSelector((state) => state.businesses.selectedBusiness);
    const status = useSelector((state) => state.businesses.status);
    const error = useSelector((state) => state.businesses.error);

    // Biznes ma'lumotlarini olish
    useEffect(() => {
        dispatch(fetchBusinesses(id));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="p-6 bg-white shadow-lg rounded-lg text-center">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 bg-red-100 text-red-700 shadow-lg rounded-lg text-center">Error: {error}</div>;
    }

    if (!business) {
        return <div className="p-6 bg-yellow-100 text-yellow-700 shadow-lg rounded-lg text-center">Biznes topilmadi!</div>;
    }

    return (
        <div className="p-8 bg-blue-50 min-h-screen">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">{business.name}</h1>
                <p className="text-xl text-gray-700 mb-6">{business.description}</p>
                <p className="text-xl text-gray-700 mb-6">Narxi: {business.cost}</p>
                <p className="text-xl text-gray-700 mb-6">Sahifa: {business.page}</p>
            </div>
        </div>
    );
};

export default BusinessDetail;
