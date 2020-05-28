import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register }  from '../redux/register/registerActions.js';


const RegisterInput = () => {
    const [username, setUsername] = useState('aucun');   
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    
    return (
        <>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={() => {  console.log(`Mes data`, username, email, password, data); dispatch(register(username,email,password)); } }>Envoyer</button>
        </>
    )
}

export default RegisterInput