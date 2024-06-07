import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const isNameValid = name.length >= 3 && name.length <= 30;
    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 10 && /[^A-Za-z0-9]/.test(password);
    const isRepeatPasswordValid = password === repeatPassword;
    setIsValid(isNameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateForm} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateForm} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validateForm} />
      <input type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} onBlur={validateForm} />
      <button type="submit" disabled={!isValid}>Sign Up</button>
    </form>
  );
};

export default Register;
