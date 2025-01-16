import React from "react";
import { Link } from "react-scroll";

export type NavLinksProps = {
  isOpen: boolean;
  onCloseMenu: () => void;
};

export default function NavLinks({ isOpen, onCloseMenu }: NavLinksProps) {
  const links = [
    { href: "home", label: "Home", isActive: false },
    { href: "about-me", label: "About me", isActive: false },
    { href: "ugc", label: "UGC", isActive: false },
    { href: "videography", label: "Videography", isActive: false },
    { href: "contacts", label: "Contacts", isActive: false },
  ];

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } flex-col lg:flex-row justify-center items-center w-full lg:flex lg:w-auto lg:order-1`}
      id="mobile-menu"
      style={isOpen ? { height: "calc(100vh - 71.09px)" } : {}}
    >
      <ul className="flex flex-col items-center font-medium space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 lg:mt-0">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:bg-gray-100 group transition px-2 py-1 rounded"
          >
            <Link
              onClick={onCloseMenu}
              smooth={true}
              to={link.href}
              duration={500} // Время в миллисекундах для плавной анимации
              offset={-71.09}
              // href={link.href}
              className={`block text-lg py-2 pr-4 pl-3 group-hover:text-cyan-400 transition  ${
                link.isActive
                  ? "text-cyan-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700"
                  : "text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
              } lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
              aria-current={link.isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          to={links[links.length - 1].href}
          // href={links[links.length - 1].href}
          className=" lg:hidden rounded py-2 px-6 bg-cyan-400 text-white transition shadow hover:scale-[1.1]"
          onClick={onCloseMenu}
          offset={-71.09}
          smooth={true}
          duration={500}
        >
          Contact me
        </Link>
      </div>
    </div>
  );
}
