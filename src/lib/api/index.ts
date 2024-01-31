import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLC_API;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


let csrfToken: string | null = null;

async function getCsrfToken(): Promise<string> {
  // Check if token is already available
  if (csrfToken) {
    return csrfToken;
  }

  // Fetch token from the API
  const response = await axios.get('/sanctum/csrf-cookie');
  csrfToken = response.data.token;

  return csrfToken as string;
}


axios.interceptors.request.use(async (config) => {
  // Get and set CSRF token before each request
  config.headers['X-CSRF-Token'] = await getCsrfToken();
  return config;
});
