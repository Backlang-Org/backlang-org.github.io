import type { Component } from "solid-js";

import logo from "../logo.svg";

import { AiOutlineGithub } from "solid-icons/ai";
import { BsDiscord } from "solid-icons/bs";
import { Link, NavLink } from "solid-app-router";

const Header: Component = () => {
  return (
    <header class="flex w-full h-16 sticky top-0 z-40 bg-slate-50 shadow-md border-b px-14">
      <div class="flex w-1/3 items-center justify-start">
        <Link href="/" class="focus:outline-none">
          <div class="flex items-center">
            <img src={logo} class="h-14 p-1 pl-2" />
            <h2 class="-ml-3 font-roboto text-3xl font-thin text-[#57B1FF]">
              acklang
            </h2>
          </div>
        </Link>
      </div>
      <nav class="flex w-1/3 items-center justify-center space-x-5">
        <NavLink
          href="getting-started"
          inactiveClass="focus:outline-none hover:underline"
          activeClass="focus:outline-none underline"
        >
          <h3 class="font-roboto text-2xl font-thin">Getting Started</h3>
        </NavLink>
        <NavLink
          href="learn"
          class="focus:outline-none"
          inactiveClass="focus:outline-none hover:underline"
          activeClass="focus:outline-none underline"
        >
          <h3 class="font-roboto text-2xl font-thin">Learn</h3>
        </NavLink>
        <NavLink
          href="docs"
          class="focus:outline-none"
          inactiveClass="focus:outline-none hover:underline"
          activeClass="focus:outline-none underline"
        >
          <h3 class="font-roboto text-2xl font-thin">Docs</h3>
        </NavLink>
      </nav>
      <div class="flex w-1/3 items-center justify-end">
        <a
          class="flex items-center overflow-hidden cursor-pointer h-16"
          href="https://discord.gg/36SsV3vy4p"
          target="__blank"
        >
          <BsDiscord size={60} class="p-2 pr-3" color="#000000" />
        </a>
        <a
          class="flex items-center overflow-hidden cursor-pointer h-16"
          href="https://github.com/Backlang-Org/Backlang"
          target="__blank"
        >
          <AiOutlineGithub size={60} class="p-2 pr-3" color="#000000" />
        </a>
      </div>
    </header>
  );
};

export default Header;
