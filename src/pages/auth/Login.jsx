import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [feedback, setFeedback] = useState('');
  const [invalidFeedback, setInvalidFeedback] = useState('');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    if (value) {
      setError({ ...error, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = { ...error };

    if (!credentials.email.trim()) {
      newError.email = 'Email is required';
    } else if (!emailRegex.test(credentials.email.trim())) {
      newError.email = 'Enter a valid email address';
    }

    if (!credentials.password.trim()) {
      newError.password = 'Password is required';
    } else if (credentials.password.trim().length < 6) {
      newError.password = 'Password must be at least 6 characters';
    }

    setError(newError);

    if (!newError.email && !newError.password) {
      setFeedback('Login Successful');
      setTimeout(() => setFeedback(''), 3000);
      setCredentials({
        email: '',
        password: '',
      });
    } else {
      setInvalidFeedback('Please correct the errors and try again!');
      setTimeout(() => setInvalidFeedback(''), 3000);
    }
  };

  return (
    <div className='py-4 h-screen max-h-[500px] flex justify-center items-center'>
      <form
        className='w-[350px] flex flex-col mx-auto gap-5 border-t-4 border-[#2c5157] border-solid px-4 py-6 rounded-lg shadow-xl'
        onSubmit={handleSubmit}
      >
        <h1 className='text-xl font-bold text-center'>Login</h1>
        <p className='text-green-500 mx-auto'>{feedback}</p>
        <p className='text-red-500 mx-auto'>{invalidFeedback}</p>
        <input
          className='w-full rounded-sm py-1 px-2 border-1 border-solid focus:ring-2 focus:outline-none focus:border-[#2c5157]'
          type='email'
          placeholder='Email Address'
          name='email'
          value={credentials.email}
          onChange={handleChange}
        />
        <p className='text-sm text-red-500'>{error.email}</p>
        <input
          className='w-full rounded-sm py-1 px-2 border-1 border-solid focus:outline-none focus:ring-2 focus:ring-[#2c5157]'
          type='password'
          placeholder='Password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <p className='text-sm text-red-500'>{error.password}</p>
        <button className='bg-[#2c5157] p-1 text-white rounded-sm'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
