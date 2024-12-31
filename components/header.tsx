/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNav from "./mobile-nav";
import MobileCart from "./mobile-cart";

export default function Header() {
  const [language, setLanguage] = useState("English");

  const languages = ["English", "Русский", "Қазақ"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <MobileNav />
          <a href="/" className="text-2xl font-bold">
            🍔
          </a>
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Input
              type="search"
              placeholder="Find in restaurants"
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MobileCart />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
              >
                <Globe className="h-4 w-4 mr-1" />
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang} onClick={() => setLanguage(lang)}>
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="hidden sm:inline-flex">Log in</Button>
        </div>
      </div>
      <div className="sm:hidden p-4 border-t">
        <div className="relative">
          <Input
            type="search"
            placeholder="Find in restaurants"
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
