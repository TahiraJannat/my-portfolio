import React from "react";
import Logo from "../assets/logo.png";
import Border from "./common/Border";
import Social from "./common/Social";
import Button from "./common/Button";

export default function Footer() {
  return (
    <section className=" bg-gray-200 relative ">
      <div className=" container mx-auto grid px-20 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="lg:mt-0 col-span-4 place-self-center pr-14 z-10">
          <a href="https://flowbite.com" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <div className="my-4">
            <p className=" leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
          </div>
          <Social />
        </div>
        <div className="mr-auto lg:col-span-4 z-10">
          <h2 className="mb-4 text-[20px] text-accent leading-none ">
            Latest Works
          </h2>
          <h3 className="mb-4 text-[18px] text-secondary">About Me</h3>
          <h3 className="mb-4 text-[18px] text-secondary">Blog</h3>
          <h3 className="mb-4 text-[18px] text-secondary">Privacy & Policy</h3>
          <h3 className="mb-4 text-[18px] text-secondary">Sign In</h3>
        </div>
        <div className="mr-auto lg:col-span-4 z-10">
          <h2 className="mb-4 text-[20px] text-accent leading-none ">
            Contact Me
          </h2>
          <p className=" leading-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="flex items-center my-8">
            <input
              class="appearance-none block w-full bg-[#92e3a98a] opacity-40 text-gray-900 placeholder:text-gray-500 border border-gray-200 rounded py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Subscribe"
            />
            <Button children={'Go'} styles="!px-4 "/>
          </div>
        </div>
      </div>
    </section>
  );
}
