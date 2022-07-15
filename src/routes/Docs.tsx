import { NavLink, useParams } from "solid-app-router";
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

  const doc = params.doc == "" ? "create-your-first-project" : params.doc;

  const [docName, setDocName] = createSignal(doc);
  const [markdown, { mutate, refetch }] = createResource(docName, fetchText);

  return (
    <main class="flex min-h-full">
      <section class="flex flex-col w-96 min-h-full bg-slate-100">
        <NavLink
          inactiveClass="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none"
          activeClass="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner focus:outline-none"
          href="/docs/create-your-first-project"
        >
          <h2 class="font-inter font-thin">Create your first project</h2>
        </NavLink>
        <NavLink
          inactiveClass="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none"
          activeClass="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner focus:outline-none"
          href="/docs/getting-started"
        >
          <h2 class="font-inter font-thin">Getting Started</h2>
        </NavLink>
      </section>
      <div class="markdown-container bg-white mb-60 w-full h-full overflow-hidden">
        <span>{markdown.loading && "Loading..."}</span>
        <div>
          {!markdown.loading && <SolidMarkdown children={markdown()} />}
        </div>
      </div>
    </main>
  );
};

export default Docs;
