"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavMenu } from "./nav-menu";

import LogoSekolah from "../../public/logo-sekolah.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <Image src={LogoSekolah} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold hidden sm:block">
            SD Negeri 1 Batu Rakit
          </span>
        </div>

        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 focus:outline-none"
          >
            {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>
      </div>
    </div>
  );
}
