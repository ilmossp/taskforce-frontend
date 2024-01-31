import axios from 'axios'
import { User } from '../types';


export async function register(user: User) {
  const data = await axios.post('/register', user)
  return data
}

export async function login(user: Partial<User>) {
  const data = await axios.post('/login', user)
  return data
}

