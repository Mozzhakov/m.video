import React from "react";

export type PageProps = object;

export default function Page({}: PageProps) {
  return (
    <main className="pt-[72px]">
      <div className="flex flex-col items-center py-12 px-6 bg-gray-50">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-sm text-center mb-8">
            Effective Date: <strong>01/20/2025</strong>
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome
              </h2>
              <p className="text-gray-600 leading-7">
                Welcome to the website of Yana Mozzhakova (“we,” “us,” or
                “our”). By accessing or using this website, you agree to these
                Terms of Service (“Terms”). If you do not agree with any part of
                these Terms, please do not use this website or our services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Services We Provide
              </h2>
              <p className="text-gray-600 leading-7">
                We offer freelance videography and video editing services, which
                may include creating promotional videos, personal or family
                content, and other related projects. Details about specific
                services, pricing, and terms of work will be provided upon
                inquiry.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Use of the Website
              </h2>
              <p className="text-gray-600 leading-7">
                You agree to use this website only for lawful purposes. You are
                prohibited from:
              </p>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>Attempting to gain unauthorized access to our website.</li>
                <li>
                  Using the website for any malicious activities or to harm
                  other users.
                </li>
                <li>
                  Misusing our contact forms or attempting to disrupt the
                  functioning of the site.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                We reserve the right to terminate your access to the website if
                you violate these Terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-7">
                All content on this website, including text, images, videos, and
                designs, is owned by Yana Mozzhakova and is protected by
                copyright laws. You may not copy, distribute, or use any content
                without prior written permission.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Client Responsibilities
              </h2>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Provide accurate and complete information about your project.
                </li>
                <li>Review and approve project details and deadlines.</li>
                <li>Make payments promptly and according to agreed terms.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Payments and Refunds
              </h2>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Payment terms will be discussed and agreed upon individually
                  for each project.
                </li>
                <li>
                  Refunds are not guaranteed and will be offered only under
                  exceptional circumstances at our discretion.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Any indirect, incidental, or consequential damages resulting
                  from the use of our services or website.
                </li>
                <li>
                  Delays or disruptions caused by factors beyond our control.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Changes to Services
              </h2>
              <p className="text-gray-600 leading-7">
                We reserve the right to modify, suspend, or discontinue any
                service offered on the website without prior notice.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Governing Law
              </h2>
              <p className="text-gray-600 leading-7">
                These Terms are governed by the laws of the State of Texas. Any
                disputes related to these Terms or the use of this website will
                be resolved exclusively in Texas courts.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Policy for International Users
              </h2>
              <p className="text-gray-600 leading-7">
                Although our services are based in Texas, they are available to
                international clients. By accessing our website, you agree that
                your interactions with us will be governed by U.S. laws.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-7">
                We reserve the right to update these Terms at any time. Updates
                will be posted on this page, and your continued use of the
                website constitutes acceptance of the updated Terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-600 leading-7">
                For questions or concerns about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:mozzhakova.21@gmail.com"
                    className="text-cyan-400 underline"
                  >
                    mozzhakova.21@gmail.com
                  </a>
                </li>
                <li>Address: The Woodlands, Texas</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
