"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector("nav");
      if (isMenuOpen && nav && !nav.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const handleNavClick = (elementId) => {
    setIsMenuOpen(false);
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
    // Track navigation clicks
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "navigation_click", {
        event_category: "Navigation",
        event_label: elementId,
      });
    }
  };

  const handleEarlyAccessClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    // Track early access button clicks
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "early_access_click", {
        event_category: "CTA",
        event_label: "Early Access Button",
      });
    }
  };

  const handleFormSubmit = (e) => {
    // Track form submissions
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "Form",
        event_label: "Contact Form",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="absolute w-full top-0 z-50">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/Cloud Logo.svg"
                width={32}
                height={32}
                className="flex items-center space-x-3 rtl:space-x-reverse h-8"
                alt="Cloud Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                My Personal Cloud
              </span>
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-[var(--menu-bg)] md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                <li>
                  <a
                    href="#home"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-[var(--hover-bg)] md:hover:bg-transparent md:hover:text-[var(--primary)] md:p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-[var(--hover-bg)] md:hover:bg-transparent md:hover:text-[var(--primary)] md:p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("about");
                    }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-[var(--hover-bg)] md:hover:bg-transparent md:hover:text-[var(--primary)] md:p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("services");
                    }}
                  >
                    Why My Personal Cloud?
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-[var(--hover-bg)] md:hover:bg-transparent md:hover:text-[var(--primary)] md:p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("portfolio");
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 text-white rounded-sm hover:bg-[var(--hover-bg)] md:hover:bg-transparent md:hover:text-[var(--primary)] md:p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main
        className="flex-1 relative bg-cover bg-[left_top] md:bg-[right_top] bg-no-repeat w-full"
        style={{
          backgroundImage: 'url("/Landing Page.svg")',
        }}
      >
        {/* Add a global overlay - darker on mobile */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/20" />

        {/* Home Section */}
        <section
          id="home"
          className="relative w-full h-screen max-h-[900px] flex items-center justify-center"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                My Personal Cloud Storage
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white md:text-gray-500 drop-shadow-lg">
                Don't let big companies store and share your files. Keep your
                photos, videos, and data safe with a secure solution for you.
              </p>
              <button
                className="bg-gradient-to-tr from-[#18C8FF] to-[#933FFE] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity border border-[#18C8FF] font-bold shadow-lg cursor-pointer"
                onClick={handleEarlyAccessClick}
              >
                Join Early Access
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-30 px-4">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Card 1 */}
              <div className="max-w-xl p-10 bg-[#1A1B23] backdrop-blur-sm rounded-4xl flex flex-col items-center text-center">
                <Image
                  src="/Girl in Circle.svg"
                  width={80}
                  height={80}
                  alt="Girl in Circle"
                  className="mb-3"
                />
                <h5 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Privacy
                </h5>
                <p className="mb-10 text-white md:text-gray-500">
                  Your very own private cloud server. Unlike shared services,
                  this is your personal hardware that no one else can access.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-[#B982FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Protect Your Data →
                </a>
              </div>

              {/* Card 2 */}
              <div className="max-w-xl p-10 bg-[#1A1B23] backdrop-blur-sm rounded-4xl flex flex-col items-center text-center">
                <Image
                  src="/Thumb Up in Circle.svg"
                  width={80}
                  height={80}
                  alt="Thumb Up in Circle"
                  className="mb-3"
                />
                <h5 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Easy to Set Up
                </h5>
                <p className="mb-10 text-white md:text-gray-500">
                  Get started in minutes with our simple setup process. No
                  technical expertise required - we handle all the complex
                  configuration for you.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-[#B982FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started Now →
                </a>
              </div>

              {/* Card 3 */}
              <div className="max-w-xl p-10 bg-[#1A1B23] backdrop-blur-sm rounded-4xl flex flex-col items-center text-center">
                <Image
                  src="/Folder in Circle.svg"
                  width={80}
                  height={80}
                  alt="Folder in Circle"
                  className="mb-3"
                />
                <h5 className="mb-4 text-3xl font-bold tracking-tight text-white">
                  Access Anywhere
                </h5>
                <p className="mb-10 text-white md:text-gray-500">
                  Save and retrieve your data from anywhere in the world. Your
                  personal cloud server is always available when you need it.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-[#B982FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Save Your Data →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-30 px-4">
          <div className="container mx-auto relative z-10">
            <div className="text-center text-white mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Why My Personal Cloud?
              </h1>
              <p className="text-md md:text-xl mb-4 max-w-2xl mx-auto text-white md:text-gray-500">
                Experience the freedom of having your own private cloud storage
                solution. Compare our product with existing cloud storage
                solutions below.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div id="detailed-pricing" className="w-full">
                <div className="overflow-hidden rounded-2xl border border-gray-700/50 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 p-6 text-sm font-medium border-b border-gray-700/50 gap-x-16 bg-white/5">
                    <div className="flex items-center text-gray-100 font-semibold text-lg">
                      Features
                    </div>
                    <div className="text-center">
                      <div className="text-gray-100 font-semibold text-lg">
                        Conventional Cloud
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Other Providers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[var(--primary)] font-semibold text-lg">
                        My Personal Cloud
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Your Private Solution
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="bg-white/5 backdrop-blur-sm">
                    {/* Feature Rows */}
                    <div className="grid grid-cols-3 px-6 py-5 text-sm border-b border-gray-700/50 gap-x-16 hover:bg-white/10 transition-colors">
                      <div className="text-gray-200">Complete Data Privacy</div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 px-6 py-5 text-sm border-b border-gray-700/50 gap-x-16 hover:bg-white/10 transition-colors">
                      <div className="text-gray-200">No Monthly Fees</div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 px-6 py-5 text-sm border-b border-gray-700/50 gap-x-16 hover:bg-white/10 transition-colors">
                      <div className="text-gray-200">No Vendor Lock-In</div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 px-6 py-5 text-sm border-b border-gray-700/50 gap-x-16 hover:bg-white/10 transition-colors">
                      <div className="text-gray-200">Portability</div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 px-6 py-5 text-sm border-b border-gray-700/50 gap-x-16 hover:bg-white/10 transition-colors">
                      <div className="text-gray-200">Full Hardware Control</div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-gray-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <svg
                          className="w-5 h-5 text-[var(--primary)] mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* CTA Row */}
                    <div className="p-6 text-center bg-white/5">
                      <button
                        className="px-8 py-3 rounded-lg bg-gradient-to-tr from-[#18C8FF] to-[#933FFE] text-white hover:opacity-90 transition-opacity text-lg border border-[#18C8FF] font-bold cursor-pointer"
                        onClick={handleEarlyAccessClick}
                      >
                        Get Early Access
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="portfolio" className="relative py-30 px-4">
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center">
              {/* Left Column - Text and Button */}
              <div className="text-white text-center md:text-left max-w-xl mx-auto md:mx-0 md:pl-[10%]">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Break Free from Subscription Fees
                </h1>
                <p className="text-md md:text-xl mb-8 text-white md:text-gray-500">
                  Say goodbye to endless monthly payments. With My Personal
                  Cloud, you pay once and own your storage forever. Get generous
                  storage capacity at a reasonable one-time cost, and take full
                  control of your digital life without recurring fees.
                </p>
                <button
                  className="bg-gradient-to-tr from-[#18C8FF] to-[#933FFE] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity md:block hidden border border-[#18C8FF] font-bold cursor-pointer"
                  onClick={handleEarlyAccessClick}
                >
                  Get Early Access
                </button>
              </div>

              {/* Right Column - SVG Icon */}
              <div className="flex justify-center">
                <Image
                  src="/Safe.svg"
                  width={512}
                  height={512}
                  alt="Visual representation"
                  className="text-[var(--primary)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="contact" className="relative py-30 px-4">
          <div className="container mx-auto relative z-10">
            <div className="container mx-auto relative z-10">
              <div className="text-center text-white mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Get Exclusive Early Access
                </h1>
                <p className="text-md md:text-xl mb-10 max-w-2xl mx-auto text-white md:text-gray-500">
                  Be among the first to experience My Personal Cloud. Limited
                  spots available.
                </p>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="max-w-md mx-auto"
                  onSubmit={handleFormSubmit}
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="7d3166a4-eaef-4141-b017-7777a87ab40a" // Get this from web3forms.com
                  />
                  <div className="relative">
                    <div className="relative flex items-center">
                      <input
                        type="email"
                        name="email"
                        className="block w-full p-4 pe-12 border-2 border-[var(--primary)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-[#B982FF] focus:border-[#B982FF] bg-transparent focus:bg-gradient-to-tr focus:from-[#B982FF]/10 focus:to-[#B982FF]/10 transition-all"
                        placeholder="your@email.com"
                        required
                      />
                      <input
                        type="hidden"
                        name="from"
                        value="My Personal Cloud"
                        aria-hidden="true"
                      />
                      <button
                        type="submit"
                        className="absolute right-2.5 p-2.5 text-[var(--primary)] hover:opacity-75 transition-opacity"
                        aria-label="Submit email"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Move footer inside main, before main's closing tag */}
        <footer className="relative w-full z-50">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 relative z-10">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image
                  src="/Cloud Logo.svg"
                  width={32}
                  height={32}
                  className="flex items-center space-x-3 rtl:space-x-reverse h-8"
                  alt="Cloud Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  My Personal Cloud
                </span>
              </span>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[var(--primary)] me-4 md:me-6"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[var(--primary)] me-4 md:me-6"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[var(--primary)] me-4 md:me-6"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("services")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Why My Personal Cloud?
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-[var(--primary)] me-4 md:me-6"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("portfolio")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[var(--primary)]"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-400 sm:text-center">
              © 2025{" "}
              <a href="#" className="hover:text-[var(--primary)]">
                My Personal Cloud™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
