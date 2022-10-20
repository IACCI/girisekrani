import React, { useState } from 'react';


function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({username:"", password:"" });

    const submitHandler = e => {
        e.preventDefault(); 

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2 className='text-center'>User Login</h2>
                {(error!="") ? (<div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                <label>username : </label>
                <input type="text" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} ></input>
                </div>
                <div
                 className='form-group'>
                    <label >password : </label>
                    <input type="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <div className="text-center">
                <input type="submit" value="LOGIN"/>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;