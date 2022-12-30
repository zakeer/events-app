import React from 'react'
import { useState } from 'react';
import { userRegisterWithEmail } from '../services/users.service';

function UserLogin() {
  const [email, setEmail] = useState('zakeer@zakeer.me');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [formErrors, setFormErrors] = useState([]);

  const handleEmailChange = event => setEmail(event.target.value);
  const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = [];
    if (!email) {
      errors.push('Please enter a valid email');
    }

    if (!password) {
      errors.push('Please enter the password')
    }

    if (password !== confirmPassword) {
      errors.push("Password mismatch...");
    }

    setFormErrors(errors);

    if (errors.length > 0) {
      return false;
    }

    const user = await userRegisterWithEmail(email, password);
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col max-w-md gap-2 border p-4 mb-2'>
      {/* controll component vs uncontroll component */}
      <input
        value={email}
        onChange={handleEmailChange}
        className='border p-2'
        type="email"
        placeholder='email' />


      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        className='border p-2'
        type="password"
        placeholder='password' />

      <input
        onChange={handleConfirmPasswordChange}
        value={confirmPassword}
        className='border p-2'
        type="password"
        placeholder='confirm password' />

      <ul className='text-red-500'>{formErrors.map(error => <li>{error}</li>)}</ul>

      <button className='bg-black text-white p-2'>Sign up</button>
    </form>
  )
}

export default UserLogin