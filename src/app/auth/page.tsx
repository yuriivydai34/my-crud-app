'use client'

import { LoginForm, RegisterForm } from '@/components/AuthForms';

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