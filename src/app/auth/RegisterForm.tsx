import { useState } from 'react';
import { authService } from '@/services/authService';
import { setAuthToken } from '@/utils/auth';
import { Button } from '@heroui/react';

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await authService.register(email, password);
      setAuthToken(token);
      // Redirect or update UI
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <Button color='primary' type="submit">Register</Button>
      {error && <div>{error}</div>}
    </form>
  );
}