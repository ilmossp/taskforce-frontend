import axios from 'axios'
import { type User } from '../types';


export async function register(user: Omit<User, 'id'>) {
  await axios.get("/sanctum/csrf-cookie").then(async () => {
    const data = await axios.post('/register', user)
    return data
  })
}

export async function login(user: Partial<User>) {
  await axios.get("/sanctum/csrf-cookie").then(async () => {
    const data = await axios.post('/login', user)
    return data
  })
}

