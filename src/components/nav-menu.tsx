"use client";

import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Beranda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Profil</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Profil Sekolah</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Struktur Organisasi</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Sarana dan Prasarana</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Data Peserta Didik</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">PTK</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Berita</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Pengumuman</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Undangan</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Inovasi</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Program</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50 gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">SPMB</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Komunitas Belajar</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Pembelajaran</Link>
                </NavigationMenuLink>{" "}
                <NavigationMenuLink asChild>
                  <Link href="#">Ekstrakurikuler</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">BOSP</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">PIP</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Unduhan</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">JDIH</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Kontak</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
