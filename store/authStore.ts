
import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

<<<<<<< HEAD
import {BASE_URL} from '../utils';

const authStore = (set: any) => ({
    userProfile: null,
    allUsers:[],


    addUser: (user:any)=>set ({userProfile: user}),
    removeUser: () => set({ userProfile : null }),

    fetchAllUsers: async () => {
        const response = await axios.get(`${BASE_URL}/api/
        users`);

       set({allUsers:response.data}) 
    }

=======
import { BASE_URL } from '../utils';

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],
  
  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  },
>>>>>>> ba883c3da1ca298ee46f55c5a400d759338676c6
});

const useAuthStore = create((
  persist(authStore, {
    name: 'auth',
  })
));

export default useAuthStore;