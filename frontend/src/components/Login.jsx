import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            setMessage('Login successful!');
            window.location.href = '/dashboard';
        } catch (err) {
            setMessage(err.response.data.msg || 'Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={onChange} required />
                <input type="password" name="password" placeholder="Password" onChange={onChange} required />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
