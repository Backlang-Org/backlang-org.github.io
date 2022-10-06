import { Link } from "solid-app-router";
import { Component } from "solid-js";
import SolidTyper from "../components/SolidTyper";
import { Swiper, SwiperSlide } from "swiper/solid";
import { EffectFade, Autoplay } from "swiper";

import syntaxHighlighting from "@/assets/screenshots/syntax_highlighting.jpg";
import codeCompletion from "@/assets/screenshots/code_completion.jpg";
import methodSignature from "@/assets/screenshots/method_signature.jpg";
import msbuild from "@/assets/screenshots/msbuild.jpg";
import managerInstallPlugin from "@/assets/screenshots/manager_install_plugin.jpg";
import manager from "@/assets/screenshots/manager.jpg";

import bot from "@/assets/my-dotnet-bot-mod.png";

// Import Swiper styles
import "swiper/css/bundle";

const Home: Component = () => {
  return (
    <main>
      <section class="flex flex-col mx-16 my-14">
        <SolidTyper
          baseText="Backlang is "
          texts={[
            "free",
            "open-source",
            "msbuild integrated",
            "functional",
            "oop",
            "macro orientated",
          ]}
          startDelay={500}
          stepTime={100}
          holdTime={1500}
          changeTime={600}
        />

        <div class="mt-5 flex gap-x-6 ">
          <div class="w-2/5">
            <p class="text-white font-inter text-lg pl-4 py-2 border-l-4 h-fit">
              Backlang is an easy programming language with a{" "}
              <Link href="learn/macros">
                <strong class="text-teal-300 underline">macro system</strong>
              </Link>{" "}
              focusing on{" "}
              <strong class="text-teal-300 underline">code reduction</strong>
              and object orientated programming.
            </p>
            <a
              href="https://playground.backlang.org/"
              class="flex rounded-[1.25rem] mt-7 w-fit ml-2 bg-teal-300 hover:bg-teal-100 px-4 py-2 focus:outline-none hover:scale-110 transition-all duration-150 ease-in-out"
              target="__blank"
            >
              <h3 class="text-xl font-inter text-slate-900 select-none">
                To the Playground!
              </h3>
            </a>

            <img src={bot} width="150" class="m-5" />
          </div>
          <div class="w-3/5 relative">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[EffectFade, Autoplay]}
              autoplay={true}
              class="bg-[#1e1e1e] w-4/5 my-3"
            >
              <SwiperSlide class="h-full">
                <img src={syntaxHighlighting} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  Syntax Highlighting
                </p>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <img src={codeCompletion} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  Code Completion
                </p>
              </SwiperSlide>
              <SwiperSlide class="h-max">
                <img src={methodSignature} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  Function Signature Help
                </p>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <img src={msbuild} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  MS Build Integration
                </p>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <img src={manager} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  Manager
                </p>
              </SwiperSlide>
              <SwiperSlide class="h-full">
                <img src={managerInstallPlugin} />
                <p class="absolute text-center w-full text-white bottom-0 px-3 py-2">
                  Extendable through plugins
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
