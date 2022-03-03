/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
   
<nav class= " bg-white h-15">
  <div class="flex justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
         
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
         
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start  ">
        
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
           
            <a href="#" class="pt-[20px] text-2xl text-[#5F6C67] hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium" >About us</a>

            <a href="#" class="pt-[20px] text-2xl text-[#5F6C67] hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium">Properties</a>
              <div class="flex-shrink-0 flex items-center">
          
          <img class="hidden lg:block h-8 w-auto h-[50px]" src={logo}  alt="Bjf Properties"/>
        </div>
            <a href="#" class="pt-[20px] text-2xl text-[#5F6C67] hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium">Contact us</a>

            <a href="#" class="pt-[20px] text-2xl text-[#5F6C67] hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md text-sm font-medium">Gallery</a>
          </div>
        </div>
      </div>
      
      </div>
    </div>


  
</nav>
  );
};

export default Navbar;
