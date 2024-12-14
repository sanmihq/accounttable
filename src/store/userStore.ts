import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
};

type UserStore = {
  user: User | null; // Holds the logged-in user
  setUser: (user: User) => void; // Function to update user data
  clearUser: () => void; // Function to clear user data
};

export const useUserStore = create<UserStore>((set) => ({
  user: null, // Initial state: No user
  setUser: (user) => set({ user }), // Update the user state
  clearUser: () => set({ user: null }), // Clear the user state
}));
