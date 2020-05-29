import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { login }  from '../redux/login/loginActions.js';


const LoginInput = () => {
    const [identifier, setIdentifier] = useState('');   
    const [password, setPassword] = useState('');  
    const dispatch = useDispatch();

    
    return (
        <>
          <label>
            Identifier:
            <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={() => dispatch(login(identifier,password))  }>Sign In</button>
        </>
    )
}

export default LoginInput