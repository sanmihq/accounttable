import { Button } from "@/components/ui/button";
import React from "react";

export default function Header() {
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
