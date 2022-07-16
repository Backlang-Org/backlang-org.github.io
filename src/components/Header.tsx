import { Component, createSignal } from "solid-js";

import logo from "../logo.svg";

import { AiOutlineGithub } from "solid-icons/ai";
import { BsDiscord } from "solid-icons/bs";
import { HiSolidMenu } from "solid-icons/hi";
import { Link, NavLink } from "solid-app-router";
import Sidebar from "./Sidebar";

const Header: Component = () => {
  const [showSidebar, setShowSidebar] = createSignal(false);

  return (
    <header class="flex w-full h-16 sticky top-0 z-40 bg-slate-50 shadow-md border-b px-2 sm:px-14">
      <div class="flex w-1/3 items-center justify-start">
        <Link href="/" class="focus:outline-none">
          <div class="flex items-center">
            <img src={logo} class="h-14 p-1 pl-2" />
            <h2 class="-ml-3 font-roboto text-3xl font-thin text-[#57B1FF] hidden sm:flex">
              acklang
            </h2>
          </div>
        </Link>
      </div>
      {/** PC */}
      <nav class="w-1/3 items-center justify-center space-x-5 hidden sm:flex">
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
      <div class="sm:flex w-1/3 items-center justify-end hidden">
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
      {/** Mobile */}
      <button
        class="flex sm:hidden items-center justify-end ml-auto px-3"
        onClick={() => setShowSidebar(!showSidebar())}
      >
        <HiSolidMenu size={40} color="#000000" />
      </button>
      <Sidebar isActive={showSidebar}></Sidebar>
    </header>
  );
};

export default Header;
