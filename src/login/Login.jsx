import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styles from './loginStyle.module.css';

function Login() {
    const navigate = useNavigate();
    const [sid, setSid] = useState('');
    const [pass, setPass] = useState('');

    const updateSid = (e) => { setSid(e.target.value) };
    const updatePass = (e) => { setPass(e.target.value) };

    function handleLogin() {
        if (sid === '' || pass === '') {
            alert('Please fill in all fields!');
            return;
        }
        else if(isNaN(sid)) {
            alert('Student Number must be a number!');
            return;
        };
        axios.post('http://localhost:3000/users', {
            sid: sid,
            pass: pass
        }).then(response => {
            console.log(response);
            if (response.data === "Success") {
                alert('Login Successful!');
                navigate('/homepage')
            }
            else{
                console.log(response.data);
                alert('Password or Student Number is incorrect!');
            }
        })
            .catch(error => console.log(error));
    }

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