import { useNavigate, useParams } from "solid-app-router";
import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
//documentEntriesImport
import MarkdownContainer from "../components/MarkdownContainer";

const fetchText = async (doc: any) =>
  (
    await fetch(
      `https://raw.githubusercontent.com/Backlang-Org/learn/prerendered/${doc}.html`
    )
  ).text();

const Docs: Component = () => {
  const [docName, setDocName] = createSignal("");

  createEffect(() => {
    const params = useParams();
    if (params.doc == "") {
      const navigate = useNavigate();
      setDocName("intro");
      navigate(`/learn/${docName()}`, { replace: true });
    } else {
      setDocName(params.doc);
    }
  });

  const [markdown, { mutate, refetch }] = createResource(docName, fetchText);

  return (
    <main class="flex relative min-h-full">
      <section class="fixed flex-col w-80 min-h-full bg-slate-100">
        {/*documentEntriesPlace*/}
      </section>

      <section class="flex bg-white min-h-screen w-full ml-80">
        <MarkdownContainer content={markdown()} />
      </section>
    </main>
  );
};

export default Docs;
