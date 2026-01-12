'"use client"';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // For mobile menu
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);
  return (
    <header className="w-full border-b bg-background px-4">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          E Commerence
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {isSearchBarShow ? (
            <>
              <Input type="text" placeholder="Search Products" />
              <Button
                variant="link"
                size="icon"
                onClick={() => setIsSearchBarShow(false)}
              >
                <X />
              </Button>
            </>
          ) : (
            <Button
              variant="link"
              size="icon"
              onClick={() => setIsSearchBarShow(true)}
            >
              <Search />
            </Button>
          )}
          <Button size="sm">Sign In</Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Navbar</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6 px-4">
              <Input type="text" placeholder="Search Products" />
              <Button className="mt-4">Sign In</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
