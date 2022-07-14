import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <main>
      <section class="flex flex-col m-24">
        <h1 class="text-6xl text-slate-50 font-inter w-3/4">
          Ihr Slogan kann hier stehen. WIRKLICH.
        </h1>
        <button class="flex rounded-2xl mt-7 w-fit bg-green-500 hover:bg-green-400 px-4 py-2 focus:outline-none hover:scale-110 transition-all duration-150 ease-in-out">
          <h3 class="text-xl font-inter text-slate-900">To the Playground!</h3>
        </button>
      </section>
    </main>
  );
};

export default Home;
