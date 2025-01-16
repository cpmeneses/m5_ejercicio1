// Import necessary libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorProfile from './DoctorProfile';
import { Doctor } from './DoctorProfile';

const DoctorsList = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchDoctors = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get('https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25');
            setDoctors(response.data);
        } catch (err) {
            setError('Failed to fetch doctors. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div>
            <h1>Doctors</h1>
            {loading && <p>Loading...</p>}
            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={fetchDoctors}>Retry</button>
                </div>
            )}
            {!loading && !error && (
                <div>
                    {doctors.map(doctor => (
                        <DoctorProfile key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            )}
            <button onClick={fetchDoctors}>Reload Data</button>
        </div>
    );
};

export default DoctorsList;
