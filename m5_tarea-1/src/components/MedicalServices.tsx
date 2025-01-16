// Import necessary libraries
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MedicalService {
    id: number;
    name: string;
    description: string;
}

const MedicalServices = () => {
    // State management
    const [data, setData] = useState<MedicalService[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch data function
    const fetchData = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get('https://api.example.com/medical-services');
            setData(response.data);
        } catch (err) {
            setError("Failed to fetch data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // useEffect to fetch data on mount
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && (
                <div>
                    <p>{error}</p>
                    <button onClick={fetchData}>Retry</button>
                </div>
            )}
            {!loading && !error && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((service) => (
                            <tr key={service.id}>
                                <td>{service.id}</td>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={fetchData}>Reload Data</button>
        </div>
    );
};

export default MedicalServices;