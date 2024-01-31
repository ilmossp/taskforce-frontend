import axios, { type AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export async function requestWithCsrfToken(request: Promise<AxiosResponse>) {
  console.log("getting token")
  axios.get('/sanctum/csrf-cookie').then(async ()=>{
      await request
  }).catch((e)=>console.log(e));
}

export * from './auth';