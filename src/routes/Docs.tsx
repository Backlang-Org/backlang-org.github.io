import { useParams } from "solid-app-router";
import { Component, createResource, createSignal } from "solid-js";
import SolidMarkdown from "solid-markdown";
import DocumentEntryButton from "../components/DocumentEntryButton";

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
        <DocumentEntryButton
          name="Create your first project"
          path="create-your-first-project"
        />
        <DocumentEntryButton name="The Backsics" path="the-backsics" />
        <DocumentEntryButton
          name="Primitive DataTypes"
          path="primitive-datatypes"
        />
        <DocumentEntryButton name="Macros" path="macros" />
        <DocumentEntryButton name="Accessibility" path="accessibility" />
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
