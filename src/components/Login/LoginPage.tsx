import React, { useState } from 'react'

type Props = {
    onLogin: () => void;
};

const LoginPage = ({ onLogin }: Props) => {

    const [username, setUsername] = useState(''); // State variables
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {

        if (username === 'admin' && password === 'admin') {
            onLogin();
        } else {
            setError('Invalid credentials')
        }

    }


    return (
        <div style={{ padding: 20 }}>

            <h2>Login Page</h2>

            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br /><br />


            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />

            <button onClick={handleLogin} >Login</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>
    )
}

export default LoginPage
