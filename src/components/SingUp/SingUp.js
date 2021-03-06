import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SingUp.css'


/*
Use State 
 */
const SingUp = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [error , setError] = useState('');

    const [createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()


    /*
      On Blur Handle
     */

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop');

    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your password didn't match")
            return;
        }
        if(password.length <6){
            setError("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword(email , password)
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'> Sing Up</h2>
         <form onSubmit={ handleCreateUser}>
         <div className='input-group'>
             <label  for="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name='email' id='' required  />
          </div>
          <div className='input-group'>
             <label for="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
          </div>
          <div className='input-group'>
             <label for="confirm-password">Confirm Password</label>
             <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required />
          </div>
          <p style={{color:'red'}}>{error}</p>
           <input className='form-submit' type="submit" value="sign up" />

         </form>
         <p>
             Already have a account  <Link className='form-link' to="/login"> Log in </Link>
         </p>

        </div>

      </div>
    );
};

export default SingUp;