import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './loginStyle.module.css';

function Login() {
    const navigate = useNavigate();
    const [sid, setSid] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');

        const handleLogin = async()=>{
            try {
                const response = await axios.get(`http://localhost:8000/api/users?sid=${sid}&pass=${pass}`,{
                    sid,
                    pass,
                });
                setMessage('Login Succesful!');
                console.log(response.data);
                navigate("/homepage")
            } catch (error) {
                console.log("Error while fetching data", error)
            }
        };

    const updateSid = (e) => { setSid(e.target.value) };
    const updatePass = (e) => { setPass(e.target.value) };


    return (
        <>
            <div className={styles.loginBody}>
                <div className={styles.loginContainer}>
                    <img className={styles.stiLogo} alt='STI Logo'></img>
                    <h1>Welcome!</h1>
                    <p>Login to STI Tracflow</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Student Number"
                            id='sid'
                            onChange={updateSid} />
                        <br />

                        <input
                            type="password"
                            placeholder="Password"
                            id='pass'
                            onChange={updatePass} />
                        <br />

                        <button type="button" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Login;