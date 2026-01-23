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

interface NavMenuProps {
  isMobile?: boolean;
}

export function NavMenu() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu className={isMobile ? "max-w-full justify-start" : ""}>
      <NavigationMenuList
        className={
          isMobile ? "flex-col items-start space-y-4 w-full" : "flex-row gap-2"
        }
      >
        <NavigationMenuList
          className={
            isMobile ? "flex flex-col items-start space-y-2 w-full" : ""
          }
        >
          <NavigationMenuItem>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Beranda
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger>Profil</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-50 gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/profil/profil-sekolah">Profil Sekolah</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/profil/struktur-organisasi">
                      Struktur Organisasi
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/profil/sarana-dan-prasarana">
                      Sarana dan Prasarana
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/profil/data-peserta-didik">
                      Data Peserta Didik
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/profil/ptk">PTK</Link>
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
                    <Link href="/berita/pengumuman">Pengumuman</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/berita/undangan">Undangan</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/berita/inovasi">Inovasi</Link>
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
                    <Link href="/program/spmb">SPMB</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/program/komunitas-belajar">
                      Komunitas Belajar
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/program/pembelajaran">Pembelajaran</Link>
                  </NavigationMenuLink>{" "}
                  <NavigationMenuLink asChild>
                    <Link href="/program/ekstrakurikuler">Ekstrakurikuler</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/program/BOSP">BOSP</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/program/PIP">PIP</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/unduhan">Unduhan</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">JDIH</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Kontak</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
