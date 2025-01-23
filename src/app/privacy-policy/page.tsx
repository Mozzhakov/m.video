import React from "react";

export type PageProps = object;

export default function Page({}: PageProps) {
  return (
    <main className="pt-[72px]">
      <div className="flex flex-col items-center py-12 px-6 bg-gray-50">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm text-center mb-8">
            Effective Date: <strong>01/20/2025</strong>
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-7">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>Name.</li>
                <li>Email address.</li>
                <li>IP address.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-7">
                We use the information you provide to:
              </p>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Communicate with you regarding inquiries, orders, or feedback.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not sell or share your personal information with third
                parties.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                3. How We Store Your Information
              </h2>
              <p className="text-gray-600 leading-7">
                We retain your personal information only as long as necessary to
                respond to your inquiries or provide requested services. Once
                communication is completed, your information is no longer stored
                in our systems.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                4. Your Rights
              </h2>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Request access to the personal information we hold about you.
                </li>
                <li>
                  Request the correction or deletion of your personal
                  information.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:m.video.cooperation@gmail.com"
                  className="text-cyan-400 underline"
                >
                  m.video.cooperation@gmail.com
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-7">
                We strive to keep your data safe but do not currently implement
                advanced security measures. Please be aware that no method of
                transmission over the internet or electronic storage is 100%
                secure. We encourage users to share their information
                responsibly.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                6. Cookies and Analytics
              </h2>
              <p className="text-gray-600 leading-7">
                We do not use cookies or any analytics tools to track your
                activity on our website.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                7. Policy for International Users
              </h2>
              <p className="text-gray-600 leading-7">
                Our services are accessible worldwide, and users from other
                regions may access the website. Please note that your data may
                be processed and stored in the United States.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                8. Policy Updates
              </h2>
              <p className="text-gray-600 leading-7">
                This Privacy Policy may be updated periodically. Updates will be
                posted on this page with a new effective date.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                9. Contact Information
              </h2>
              <p className="text-gray-600 leading-7">
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <ul className="list-disc pl-5 text-gray-600 leading-7">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:m.video.cooperation@gmail.com"
                    className="text-cyan-400 underline"
                  >
                    m.video.cooperation@gmail.com
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
