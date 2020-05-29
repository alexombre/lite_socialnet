import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { profileUpdate }  from '../redux/profile/profileActions.js';
import Cookies from 'js-cookie'



const ProfileInput = () => {
    let history = useHistory();
    const [username, setUsername] = useState('');   
    const [email, setEmail] = useState('');
    const [id, setId] = useState(''); 
    const [description, setDescription] = useState('');  
    const dispatch = useDispatch();
    
    
    
    useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-minireseausocial.mathis-dyk.fr/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`, 
            'Content-Type': 'application/json'
          }
          
        });
        const text = await response.json();
          setUsername(text.username);
          setEmail(text.email);
          setDescription(text.description);
          setId(text.id);
          console.log(text);
    }
    fetchData();
  }, []);  
    
    return (
        <>
          <h3>ID: {id}</h3>
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
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <button onClick={() => { dispatch(profileUpdate(username,email, description, id)); } }>Update</button>
        </>
    )
}

export default ProfileInput