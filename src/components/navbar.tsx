import { IconInnerShadowTop } from "@tabler/icons-react";
import { NavMenu } from "./nav-menu";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-50">
      <div className="flex items-center justify-between h-32">
        <div className="size-20">
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkcAMCyAY-P2U8L_8Ze4bjwTtLY-lp2Om95DjOwUbe92xMt2xszXTlx6WgyverSeUlkZ9d5spU7V9Hhcx3gZhugt9YLsNGm5y0NlJVYeLXK26hcg5oo2p2ryLemHHrB6deNooauBnOxGsjaHXTiBLHj6U-7g6jGJMmJjgEVAD4mCuvRbifn79WOukeU=w16383"
            alt=""
          />
        </div>
        <NavMenu />
      </div>
    </div>
  );
}
