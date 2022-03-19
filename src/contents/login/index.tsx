import { ErrorMessage, LoginContentContainer } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

interface ILogin {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Digite seu email').email('Email inválido'),
  password: yup.string().required('Digite sua senha')
})

export function LoginContent() {
  const { signIn } = useContext(AuthContext)
  const { register, handleSubmit, formState:{ errors }, clearErrors } = useForm<ILogin>({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<ILogin> = async (data) => {
    try {
      await signIn(data);
    } catch (error) {
      toast.error('E-mail ou senha incorreto');
    }
  }

  return (
    <LoginContentContainer>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Welcome back</h1>
        <p>E-mail</p>
        <input 
          type="email"
          placeholder="E-mail"
          {...register('email')}
          onClick={() => clearErrors('email')}
        />
        <ErrorMessage>
          <p>{errors.email?.message}</p>
        </ErrorMessage>
        <p>Password</p>
        <input 
          type="password"
          placeholder="password" 
          {...register('password')}
          onClick={() => clearErrors('email')}
        />
        <ErrorMessage>
          <p>{errors.password?.message}</p>
        </ErrorMessage>
        <button type="submit">
          login
        </button>
      </form>
    </LoginContentContainer>
  );
}