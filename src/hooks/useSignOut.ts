"use client";

import { useUserStore } from "@/store/userStore";
import { useClerk } from "@clerk/nextjs";

export const useSignOut = () => {
  const { signOut } = useClerk();
  const clearUser = useUserStore((state) => state.clearUser);

  const handleSignOut = (redirectUrl: string = "/") => {
    signOut({ redirectUrl });
    clearUser();
  };

  return { handleSignOut };
};
