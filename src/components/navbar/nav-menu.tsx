'use client';

export const navData = [
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div className="pl-1">
      <nav className="bg-white border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-ms transition cursor-pointer">
        {/* inner */}
        <div className="hidden md:flex flex-row items-center justify-between">
          {navData.map((link, index) => {
            return (
              <Link
                className={`${
                  link.path === pathname && "text-teal-500"
                } relative flex items-center group hover:text-teal-500 transition-all duration-300 px-6`}
                href={link.path}
                key={index}
              >
                {/* tooltip */}
                <div className="hidden lg:block">{link.name}</div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
