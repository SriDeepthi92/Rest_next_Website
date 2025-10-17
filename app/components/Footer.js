"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* three columns in one row */}
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* logo + description */}
          <div className="flex flex-col gap-4">
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="Tivachi" className="footer-logo" />
            </a>
            <p className="text-sm text-gray-400 max-w-sm">
              Timeless rugs for modern interiors. Handcrafted with care.
            </p>
          </div>

          {/* contact */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Contact</h5>
            <ul className="text-sm text-gray-300 space-y-3">
              <li>📍 Canada</li>
              <li>📞 Phone: (0039) 333 22 68 347</li>
              <li>
                ✉️ Email:{" "}
                <a href="mailto:hello@tivachi.com" className="text-amber-400 hover:underline">
                  hello@tivachi.com
                </a>
              </li>
              <li>💬 Skype: tivachi_support</li>
            </ul>
          </div>

          {/* links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Links</h5>
            <ul className="footer-links text-sm text-gray-300 space-y-2">
              <li><a href="/" className="hover:text-amber-400">Home</a></li>
              <li><a href="/collections" className="hover:text-amber-400">Collections</a></li>
              <li><a href="/about" className="hover:text-amber-400">About</a></li>
              <li><a href="/contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar with social icons */}
      <div className="site-footer-bottom">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} Tivachi Rugs. All rights reserved.</div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="social-icon" title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon" title="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27 0 27-16v-1A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Pinterest" className="social-icon" title="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a9.5 9.5 0 00-3 18.5c-.1-.8-.2-2.1 0-3 0 0 .4-1.6 1.3-2.6-.6-1.4-.1-3 .4-4.1 1.2 0 2.4.9 2.9 1.9.8-.1 1.7-.3 2.6-.8.3.9.1 2-.2 2.8.9 1.1 1.4 2.8 1.4 4.4A9.5 9.5 0 0012 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}