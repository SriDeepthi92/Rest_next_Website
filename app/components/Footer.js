"use client";
import React from "react";
import Link from "next/link"; // optional: if navbar styles live there
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
       <div className="container mx-auto px-6 pl-6">

          {/* grid: 4 columns on md+, 1 column on small screens */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start py-8 px-4 md:px-0 md:pl-10">
                      <div className="px-3 text-center flex items-center justify-center">
<div className="flex items-center justify-center h-full">
  <Link href="/">
    <Image src="/tewachi-logo.png" alt="Tewachi Logo" width={160} height={160} />
  </Link>
</div>
            </div>
            <div className="px-3 pt-6 md:pt-0 text-center"> {/* add padding above Heading 1 on small screens */}
               <div className="footer-pad">
               <h4 className="text-black space-y-1 font-semibold mb-3 text-left">Support</h4>
                <ul className="list-none space-y-1 text-left">
                   <li><a href="#" className="block">Contact us</a></li>
                   <li><a href="#" className="block">Shipping</a></li>
                   <li><a href="#" className="block">Returns</a></li>
                 </ul>
               </div>
            </div>
            <div className="px-3">
               <div className="footer-pad">
<h4 className="text-black font-semibold mb-3 text-left">Brand</h4>
<ul className="list-none space-y-1 text-left">
                   <li><a href="#" className="block">About us</a></li>
                   <li><a href="#" className="block">Rug Guide</a></li>
                   <li><a href="#" className="block">custom Rug</a></li>
                 </ul>
               </div>
            </div>
            <div className="px-3">
                   <div className="footer-pad">
               <h4 className="text-black font-semibold mb-3">Follow Us</h4>
               <ul className="social-network social-circle flex gap-3 list-none p-0 m-0">
                <li>
  <a href="#" className="social-icon" title="Etsy" aria-label="Etsy">
    {/* Etsy SVG */}
    <svg width="16" height="16" viewBox="0 0 512 512" fill="none">
      <path d="M64 32C46.3 32 32 46.3 32 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zm80 96h192v32h-64v96h64v32h-64v96h64v32H144v-32h64v-96h-64v-32h64v-96h-64v-32z" fill="currentColor"/>
    </svg>
  </a>
</li>
<li>
  <a href="#" className="social-icon" title="Instagram" aria-label="Instagram">
    {/* Instagram SVG */}
    <svg width="16" height="16" viewBox="0 0 448 512" fill="none">
      <path d="M224 141c-45.9 0-83 37.1-83 83s37.1 83 83 83 83-37.1 83-83-37.1-83-83-83zm124-41c0 14.3-11.7 26-26 26s-26-11.7-26-26 11.7-26 26-26 26 11.7 26 26zm76 27c-1.7-35.3-9.9-66.7-36.3-93.1S318.3 32 283 30.3C247.7 28.6 200.3 28 160 28s-87.7.6-123 2.3C46.7 32 15.3 40.2-11.1 66.6S-1.7 112.7 0 148c1.7 35.3 9.9 66.7 36.3 93.1S129.7 480 165 481.7c35.3 1.7 82.7 2.3 123 2.3s87.7-.6 123-2.3c35.3-1.7 66.7-9.9 93.1-36.3S480.3 318.3 482 283c1.7-35.3 2.3-82.7 2.3-123s-.6-87.7-2.3-123zM224 338c-62.9 0-114-51.1-114-114s51.1-114 114-114 114 51.1 114 114-51.1 114-114 114z" fill="currentColor"/>
    </svg>
  </a>
</li>

               </ul>
               </div>
            </div>
          </div>
 

           </div>
         </div>
                    <div className="row mt-8">
              <div className="copy text-center">
               <p className="text-center text-sm text-black">

                 © {new Date().getFullYear()} Tewachi Rugs. All rights reserved.
               </p>
             </div>
           </div>
     </footer>
   );
 }