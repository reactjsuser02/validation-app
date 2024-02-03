import './App.css';

import React, { useState } from 'react';

function Step1(props) {

  const [form, setForm] = useState({
    login: '',
    password: '',
    confirm_password: '',
  })
  
  function handleChange(event) {
    props.onChange(event)
    // console.log(event.target.id)
    // console.log(form)
    // const newForm = {
    //   login: form.login,
    //   password: form.password,
    //   confirm_password: form.confirm_password,
    // }
    // newForm[event.target.id] = event.target.value

    // setForm(newForm)

  }
  function handleClick() {
    props.submit()
  }

  return (
    <div className='card p-4 sbg-zinc-200 shadow-[0_2px_10px_1px_rgba(0,0,0,0.4)]'>
        <p className='font-semibold mb-4'>User Registration Wizard - Step 1</p>
        <label className='text-gray-600' htmlFor="login">Login</label>
        <input className='border w-full h-10 mb-4 p-4' type="text" id='login' onChange={handleChange} value={props.form.login} />
        <label className='text-gray-600' htmlFor="password">Password</label>
        <input className='border w-full h-10 mb-4 p-4' type="password" id='password' onChange={handleChange} value={props.form.password} />
        <label className='text-gray-600' htmlFor="confirm_password">Confirm password</label>
        <input className='border w-full h-10 mb-4 p-4' type="password" id='confirm_password' onChange={handleChange} value={props.form.confirm_password} />
        <button className="text-white rounded px-3 py-1 bg-purple-500" onClick={handleClick}>Next</button>
    </div>
  );
}

export default Step1;

