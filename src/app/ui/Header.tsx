"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <header>
      <nav className="flex items-center justify-between border-b border-gray-300 p-4">
        <div className="text-gray-800">Accounttable</div>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
