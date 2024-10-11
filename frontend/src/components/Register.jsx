import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', form);
            localStorage.setItem('token', res.data.token);
            setMessage('Registration successful!');
            window.location.href = '/dashboard';
        } catch (err) {
            setMessage(err.response.data.msg || 'Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={onChange} required />
                <input type="password" name="password" placeholder="Password" onChange={onChange} required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
