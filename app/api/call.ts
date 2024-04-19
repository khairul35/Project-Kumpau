import axios from 'axios';

const repository = axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// repository.interceptors.request.use(async (config) => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
// });

repository.interceptors.response.use(
    response => response,
    async (error) => {
      const {
        config,
        response: { status },
      } = error;
      if (status === 401) {
        localStorage.setItem('isLogin', 'false');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
);

export default repository;
