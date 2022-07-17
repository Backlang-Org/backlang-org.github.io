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
      setDocName("intro");
      navigate(`/docs/${docName()}`, { replace: true });
    } else {
      setDocName(params.doc);
    }
  });

  const [markdown, { mutate, refetch }] = createResource(docName, fetchText);

  return (
    <main class="flex min-h-full">
      <section class="fixed flex-col w-80 min-h-full bg-slate-100">
        <DocumentEntryButton name="Introduction" path="intro" />
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
        <DocumentEntryButton name="Intrinsics" path="intrinsics" />
      </section>
      <section class="bg-white min-h-screen w-full ml-80">
        <MarkdownContainer content={markdown()} />
      </section>
    </main>
  );
};

export default Docs;
