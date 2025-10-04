"use client";

import NavbarThemeToggler from "@/components/navbar/navbar-theme-toggler.client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={"/auth"} passHref>
              <p className="font-medium">Login</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavbarThemeToggler className="ml-4" />
      </NavigationMenuList>
    </>
  );
};

export default NavbarMenu;
