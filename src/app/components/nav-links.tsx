import React from "react";
import { Link } from "react-scroll";

export type NavLinksProps = {
  isOpen: boolean;
  onCloseMenu: () => void;
  isHomePage: boolean;
  openModal: () => void;
};

export default function NavLinks({
  isOpen,
  onCloseMenu,
  isHomePage,
  openModal,
}: NavLinksProps) {
  const links = [
    { href: "home", label: "Home" },
    { href: "about-me", label: "About me" },
    { href: "videography", label: "Videography" },
    { href: "ugc", label: "UGC" },
    { href: "contacts", label: "Contacts" },
  ];

  const handleClick = () => {
    onCloseMenu();
    openModal();
  };

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
            {isHomePage ? (
              <Link
                onClick={onCloseMenu}
                smooth={true}
                to={link.href}
                duration={500}
                offset={-71.09}
                className="block text-lg py-2 pr-4 pl-3 group-hover:text-cyan-400 transition text-gray-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={`/#${link.href}`}
                onClick={onCloseMenu}
                className="block text-lg py-2 pr-4 pl-3 group-hover:text-cyan-400 transition text-gray-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-12">
        {isHomePage ? (
          <button
            // to={links[links.length - 1].href}
            className="lg:hidden rounded py-2 px-6 bg-cyan-400 text-white transition shadow hover:scale-[1.1]"
            // offset={-71.09}
            // smooth={true}
            // duration={500}
            onClick={handleClick}
          >
            Contact me
          </button>
        ) : (
          <a
            href={`/#${links[links.length - 1].href}`}
            className="lg:hidden rounded py-2 px-6 bg-cyan-400 text-white transition shadow hover:scale-[1.1]"
            onClick={handleClick}
          >
            Contact me
          </a>
        )}
      </div>
    </div>
  );
}
