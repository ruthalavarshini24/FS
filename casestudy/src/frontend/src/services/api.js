import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/+$/, '');
if (!API_BASE_URL) throw new Error('VITE_API_BASE_URL is missing');

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // tolerates Render free-tier cold start
  headers: { 'Content-Type': 'application/json' },
});

export const fetchStudents = () => apiClient.get('/api/students');
export const addStudent = (d) => apiClient.post('/api/students', d);
export const updateStudent = (id, d) => apiClient.put(`/api/students/${id}`, d);
export const deleteStudent = (id) => apiClient.delete(`/api/students/${id}`);

export default apiClient;
