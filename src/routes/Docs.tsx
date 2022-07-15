import { useParams } from "solid-app-router";
import { Component, createResource, createSignal } from "solid-js";
import SolidMarkdown from "solid-markdown";

const fetchText = async (doc: any) =>
  (
    await fetch(
      `https://raw.githubusercontent.com/Backlang-Org/backlang-org.github.io/main/docs/${doc}.md`
    )
  ).text();

const Docs: Component = () => {
  const params = useParams();

  const doc = params.doc == "" ? "test" : params.doc;

  const [docName, setDocName] = createSignal(doc);
  const [markdown, { mutate, refetch }] = createResource(docName, fetchText);

  return (
    <main class="flex h-full">
      <section class="flex flex-col w-96 h-full bg-slate-100">
        <button class="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none">
          <h2 class="font-inter font-thin">Installation</h2>
        </button>
        <button class="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner focus:outline-none">
          <h2 class="font-inter font-thin">Getting Started</h2>
        </button>
        <button class="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none">
          <h2 class="font-inter font-thin">{doc}</h2>
        </button>
      </section>
      <div class="markdown-container bg-white w-full h-full">
        <span>{markdown.loading && "Loading..."}</span>
        <div>
          {!markdown.loading && <SolidMarkdown children={markdown()} />}
        </div>
      </div>
    </main>
  );
};

export default Docs;
