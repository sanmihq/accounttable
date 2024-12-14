"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useUserStore } from "@/store/userStore";

export default function useUserData() {
  const { user, isLoaded } = useUser();
  const setUser = useUserStore((state) => state.setUser); // Zustand function to update user

  useEffect(() => {
    if (isLoaded && user) {
      setUser({
        id: user.id,
        name: user.fullName || "",
        email: user.emailAddresses[0]?.emailAddress || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        avatarUrl: user.imageUrl || "",
      });
    }
  }, [user, isLoaded, setUser]);

  return useUserStore((state) => state.user); // Return Zustand user data
}
