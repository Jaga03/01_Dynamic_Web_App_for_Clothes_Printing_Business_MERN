import { create } from 'zustand';
import { api } from '../lib/Api';

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post('/auth/login', { email, password });
      set({ user: res.data });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Login failed' });
    } finally {
      set({ loading: false });
    }
  },

  register: async (name, email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post('/auth/signup', { fullName:name, email, password });
      set({ user: res.data });
    } catch (err) {
      set({ error: err.response?.data?.message || 'Registration failed' });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      await api.post('/auth/logout'); 
    } catch (err) {
      console.error('Logout error:', err);
    }
    set({ user: null });
  },
}));
export default useAuthStore;
