'use client'

import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export default function AuthPage() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <h2>Register</h2>
      <RegisterForm />
    </div>
  );
}