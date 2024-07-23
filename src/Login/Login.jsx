import React from 'react';
import "./login.css";
const Login = () => {
  return (
    <div className='addUsres'>
        <h3>Login</h3>
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
                <label className="password">Password :</label>
                <input 
                 type="text" 
                 id='password'
                 autoComplete='off'
                 placeholder='Enter Password'
                 required=''
                />
                <button type="submit" class="btn btn-success">
                    Login
                </button>

            </div>

        </form>

    </div>
  )
}

export default Login;