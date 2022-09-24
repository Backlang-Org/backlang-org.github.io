import { Link } from "solid-app-router";
import { Component } from "solid-js";
import SolidTyper from "../components/SolidTyper";
import { Swiper, SwiperSlide } from "swiper/solid";
import { EffectFade, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

const Home: Component = () => {
  return (
    <main>
      <section class="flex flex-col mx-36 my-28">
        <SolidTyper
          baseText="Backlang is "
          texts={[
            "free",
            "msbuild integrated",
            "functional",
            "oop",
            "code reducing",
          ]}
          startDelay={500}
          stepTime={100}
          holdTime={1500}
          changeTime={600}
        />

        <div class="mt-5 flex gap-x-6 border-l-4">
          <p class="text-white font-inter text-lg w-2/5 pl-4 py-2">
            Backlang is an easy programming language with a{" "}
            <Link href="learn/macros">
              <strong class="text-teal-300 underline">macro system</strong>
            </Link>{" "}
            focusing on{" "}
            <Link href="">
              <strong class="text-teal-300 underline">code reduction</strong>
            </Link>{" "}
            and object orientated programming.
          </p>
          <div class="w-3/5">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[EffectFade, Autoplay]}
              autoplay={true}
              class="bg-white w-3/5 h-[50px] my-3"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>

        <a
          href="https://playground.backlang.org/"
          class="flex rounded-[1.25rem] mt-7 w-fit ml-2 bg-teal-300 hover:bg-teal-100 px-4 py-2 focus:outline-none hover:scale-110 transition-all duration-150 ease-in-out"
          target="__blank"
        >
          <h3 class="text-xl font-inter text-slate-900 select-none">
            To the Playground!
          </h3>
        </a>
      </section>
    </main>
  );
};

export default Home;
