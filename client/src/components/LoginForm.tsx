import React, { FC, useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { store } = useContext(Context)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            height: 200,
            width: 300,
            backgroundColor: '#fafafa',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            margin: 'auto',
        }}>
            <input 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <div style={{
                display: 'flex',
                gap: 46,
               }}>
                <button 
                    onClick={() => store.login(email, password)}
                >
                    Login
                </button>
                <button 
                    onClick={() => store.registration(email, password)}
                >
                    Registration
                </button>
            </div>
        </div>
    );
};

export default observer(LoginForm);