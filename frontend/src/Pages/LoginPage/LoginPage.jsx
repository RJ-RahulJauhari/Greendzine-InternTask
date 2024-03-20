import React, { useState } from 'react'
import '../LoginPage/LoginPage.scss'
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();
  const [validPass,setValidPass] = useState(true);

  const username_default = 'greendzine';
  const password_defalut = 'greendzine@123';

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const validate = () => {
    if(username == username_default && password == password_defalut){
      navigate('/home');
      setValidPass(true)
    }else{
      setValidPass(false);
    }

  }


  return (
    <div className='login full-width page-height'>
    <div className='logo-container pad-inline full-height flex-col flex center'>
        <div className='logo flex-col center sp-2'>
            <img className='logo-image' src="src\assets\logos\logo-large.png" alt="Logo" />
            <p className='tag-line'>We are Electric</p>
        </div>
        <div className='login-form flex-col wrap sp-25'>
            <input onChange={(e) => {setUsername(e.target.value); setValidPass(true)}} type='email' placeholder='Email' type="text" className='input-field' />
            <input onChange={(e) => {setPassword(e.target.value); setValidPass(true)}} type='password' placeholder='Password' type="text" className='password input-field ' />
            <button onClick={() => {validate()}} className='button clickable mulish-bold'>Login</button>
            {!validPass?<p className='flex center error-text'>Invalid username or password...</p>:""}
            <p className='forgot-text clickable'>Forgot Password?</p>
        </div>
    </div>
    </div>
  )
}

export default LoginPage
