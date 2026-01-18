import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavMenu } from "./nav-menu";

import LogoSekolah from "../../public/logo-sekolah.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-50">
      <div className="flex items-center justify-between h-32">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <Image
              src={LogoSekolah}
              alt="Logo SD Negeri 1 Batu Rakit"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-medium">SD Negeri 1 Batu Rakit</span>
          </div>
        </div>

        <NavMenu />
      </div>
    </div>
  );
}
