// import React from "react";
// import Link from "next/link";
// import SocialNetworks from "@/app/components/social-networks";
// import Logo from "@/app/components/logo";
//
// export type PageFooterProps = object;
//
// export default function PageFooter({}: PageFooterProps) {
//   return (
//     <footer className="bg-white text-gray-600 border-t border-gray-200">
//       <div className="max-w-6xl mx-auto px-4 py-2">
//         <div className="flex flex-col items-center md:flex-row md:justify-between">
//           {/* Logo */}
//           <div className="mb-4 md:mb-0">
//             <Logo />
//           </div>
//           <SocialNetworks />
//
//           {/* Contact Information */}
//           <div className="text-center md:text-right">
//             <p className="mb-2">Contact Us:</p>
//             <p className="text-sm text-gray-600">email@example.com</p>
//             <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
//           </div>
//         </div>
//
//         {/* Copyright and Additional Links */}
//         <div className="mt-2 pt-2 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
//           <p>
//             © {new Date().getFullYear()} Your Company Name. All rights
//             reserved.
//           </p>
//           <div className="mt-4 md:mt-0">
//             <Link href="/" className="hover:text-cyan-400 mr-4">
//               Privacy Policy
//             </Link>
//             <Link href="/" className="hover:text-cyan-400">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import Link from "next/link";
import Logo from "@/app/components/logo";

export type PageFooterProps = object;

export default function PageFooter({}: PageFooterProps) {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="px-4 lg:px-10 py-2.5 h-full mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center md:flex-row md:justify-between"></div>

        {/* Copyright and Additional Links */}
        <div className="  flex flex-col md:flex-row justify-between items-center text-lg font-medium text-gray-600">
          <Logo />

          <ul className="flex flex-row items-center font-medium gap-3   lg:flex-row mt-3 md:mt-0">
            <li className="hover:bg-gray-100 group transition px-2 py-1 rounded">
              <Link href="/privacy-policy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </li>
            <li className="hover:bg-gray-100 group transition px-2 py-1 rounded">
              <Link href="/terms" className="hover:text-cyan-400">
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="mt-3 md:mt-0">
            © {new Date().getFullYear()} M.Video. All rights reserved.
          </p>
          {/*<div className="mt-4 md:mt-0">*/}
          {/*  <Link href="/" className="hover:text-cyan-400 mr-4">*/}
          {/*    Privacy Policy*/}
          {/*  </Link>*/}
          {/*  <Link href="/" className="hover:text-cyan-400">*/}
          {/*    Terms of Service*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </footer>
  );
}
