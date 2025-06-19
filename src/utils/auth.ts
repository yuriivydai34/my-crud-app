// src/utils/auth.ts
import Cookies from 'js-cookie';

export function setAuthToken(token: string) {
  Cookies.set('jwt_token', token, { expires: 7, secure: true, sameSite: 'strict' });
}

export function getAuthToken() {
  return Cookies.get('jwt_token');
}

export function removeAuthToken() {
  Cookies.remove('jwt_token');
}