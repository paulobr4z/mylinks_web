import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';

import { signInRequest } from '../services/auth';
import { api } from '../services/api';

interface IUser {
  name: string;
  email: string;
  avatarUrl: string;
}

interface ISignInRequest {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  signIn: (data: ISignInRequest) => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const { 'mylinks.token': token } = parseCookies();

  //   if (!token) {
  //     Router.push('/login')
  //   }
  // }, [])

  async function signIn({ email, password }: ISignInRequest) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, 'mylinks.token', token, {
      maxAge: 60 * 60 * 24, //1 day
    });

    api.defaults.headers.common['Authorizaion'] = `Bearer ${token}`

    setUser(user);

    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}