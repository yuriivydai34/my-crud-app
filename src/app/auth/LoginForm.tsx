import { useState } from 'react';
import { authService } from '@/services/authService';
import { setAuthToken } from '@/utils/auth';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { token } = await authService.login(email, password);
      setAuthToken(token);
      // Redirect or update UI
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}
