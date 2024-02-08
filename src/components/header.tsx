"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeSwitcher from "@/components/theme-switcher";

import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();
  // const { data: session } = useSession();

  return (
    <header className="border-b">
      <div className="container py-2 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="font-semibold text-lg">
            mongodb-authjs
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/profile" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === "/profile"}
                  >
                    Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-5">
          {/* {session?.user ? (
          ) : ( */}
          <Button variant="outline" onClick={() => signOut()}>
            Logout
          </Button>
          <Button
            asChild
            variant={pathname === "/login" ? "secondary" : "outline"}
          >
            <Link href="/login">Login</Link>
          </Button>
          {/* )} */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
