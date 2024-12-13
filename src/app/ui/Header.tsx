"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

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
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
