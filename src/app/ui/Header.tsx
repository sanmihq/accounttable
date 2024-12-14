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
        <div>
          <Button asChild>
            <Link href="/sign-in">Get Started</Link>
          </Button>
          <SignOutButton/>
        </div>
      </nav>
    </header>
  );
}
