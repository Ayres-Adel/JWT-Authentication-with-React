import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const res = await axios.get('http://localhost:5000/api/auth/dashboard', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setMessage(res.data.msg);
            } catch (err) {
                setMessage('Failed to fetch data');
                // Optionally, you can logout the user if token is invalid
                // logout();
            }
        };
        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;
