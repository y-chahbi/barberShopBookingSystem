"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Login = ({isModel = false, width="", height=""}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error, setError] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;


    const handelInputes = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        if (!emailRegex.test(email)) {
            setError("Invalid email. It must end with @gmail.com or @yahoo.com.");
        }
        else {
            if (!passwordRegex.test(password)) {
                setError("Invalid password. It must be strong (uppercase, lowercase, digit, special character, and 8+ characters).");
            }
            else {
                axios.post('/api/v0.1/auth/login', {
                    email : email,
                    password : password
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    setError(err.response.data.error);
                })
            }
        }
    }

    useEffect(() => {
        const time = setTimeout(() => {
            setError("");
            clearTimeout(time);
        }, 3000);
    }, [Error])

    return (
      <div className='LoginHolder'>
            <div className={`bg-black/40 border-4 border-[var(--maincolor)]`} style={{width: width, height: height}}>
                {Error && 
                    <div className='Errors flex justify-center'>
                        <div className='text-red-600'>{Error}</div>
                    </div>
                }
                <div className='title flex justify-center font-bold my-2 text-[var(--maincolor)]'> LOGIN </div>
                <form className='flex justify-center flex-col items-center text-[var(--maincolor)]'>
                    <input placeholder='Email' name='Email' type='email'
                      onChange={(e) => {setEmail(prev => e.target.value)}}
                      className='bg-transparent placeholder:text-[var(--maincolor)] mb-4 outline-none border-[var(--maincolor)] border-b-2'></input>
                    <input placeholder='Password' name='Password' type='password'
                      onChange={(e) => {setPassword(prev => e.target.value)}}
                      className='bg-transparent placeholder:text-[var(--maincolor)] mb-4 outline-none border-[var(--maincolor)] border-b-2'></input>
                    <button className='my-6 border-[1px] px-4 py-2 border-[var(--maincolor)]'
                      onClick={handelInputes}>
                        LOGIN</button>
                </form>
            </div>
      </div>
    )
}

export default Login;