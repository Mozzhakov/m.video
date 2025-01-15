import React from "react";

export type NavLinkProps = object;

export default function NavLink({}: NavLinkProps) {
  const links = [
    { href: "#", label: "Home", isActive: true },
    { href: "#", label: "Company" },
    { href: "#", label: "Marketplace" },
    { href: "#", label: "Features" },
    { href: "#", label: "Team" },
    { href: "#", label: "Contact" },
  ];
  return (
    <div
      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`block py-2 pr-4 pl-3 ${
                link.isActive
                  ? "text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700"
                  : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
              } lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
              aria-current={link.isActive ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
