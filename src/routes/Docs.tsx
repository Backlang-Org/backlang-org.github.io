import { useNavigate, useParams } from "solid-app-router";
import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import DocumentEntryButton from "../components/DocumentEntryButton";
import MarkdownContainer from "../components/MarkdownContainer";

const fetchText = async (doc: any) =>
  (
    await fetch(
      `https://raw.githubusercontent.com/Backlang-Org/backlang-org.github.io/main/docs/${doc}.md`
    )
  ).text();

const Docs: Component = () => {
  const [docName, setDocName] = createSignal("");

  createEffect(() => {
    const params = useParams();
    if (params.doc == "") {
      const navigate = useNavigate();
      setDocName("create-your-first-project");
      navigate(`/docs/${docName()}`, { replace: true });
    } else {
      setDocName(params.doc);
    }
  });

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
      <MarkdownContainer content={markdown()} />
    </main>
  );
};

export default Docs;
