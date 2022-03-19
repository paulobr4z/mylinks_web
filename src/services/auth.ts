import { api } from './api';
import { getAPIClient } from './axios';

interface ISignInRequest {
  email: string;
  password: string;
}


export async function signInRequest(data: ISignInRequest) {
  try {
    const response = await api.post('/sessions', data)
    
    return response.data;
  } catch (error) {
    throw { error: 'Falha, tente novamente...' }
  }
}