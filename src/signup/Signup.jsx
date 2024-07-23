import React from 'react'
import "./signup.css";
import {Link} from "react-router-dom";
const signup = () => {
  return (
    <div className='addUsres'>
        <h3>Sign Up</h3>
        <form className='addUsersForm'>
            <div className='inputGroup'>
                <label className="name">User Name :</label>
                <input 
                 type="text" 
                 id='name'
                 autoComplete='off'
                 placeholder='Enter your User Name'
                 required=''
                />
                <label className="email">Email :</label>
                <input 
                 type="text" 
                 id='email'
                 autoComplete='off'
                 placeholder='Enter your Email'
                 required=''
                />
                <label className="password">Password :</label>
                <input 
                 type="text" 
                 id='password'
                 autoComplete='off'
                 placeholder='Enter Password'
                 required=''
                />
                <button type="submit" class="btn btn-success">
                    Sign Up
                </button>

            </div>

        </form>

        <div className='login'>
            <p>Already have an Account ?</p>
            <Link to="/login" type="submit" class="btn btn-primary">
                Login
            </Link>

        </div>

    </div>
  )
}

export default signup;