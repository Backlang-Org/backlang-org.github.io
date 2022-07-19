import { Component } from "solid-js";
import SolidTyper from "../components/SolidTyper";

const Home: Component = () => {
  return (
    <main>
      <section class="flex flex-col m-24">
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
        <a
          href="https://playground.backlang.org/"
          class="flex rounded-[1.25rem] mt-7 w-fit bg-green-500 hover:bg-green-400 px-4 py-2 focus:outline-none hover:scale-110 transition-all duration-150 ease-in-out"
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
