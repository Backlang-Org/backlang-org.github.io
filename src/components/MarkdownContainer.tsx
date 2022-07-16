import { Component } from "solid-js";
import { marked } from "marked";
import { highlight, languages } from "prismjs";

interface MarkdownContainerProps {
  content: string | undefined;
}

marked.setOptions({
  highlight: (code, lang) => {
    if (languages[lang]) {
      return highlight(code, languages[lang], lang);
    } else {
      return code;
    }
  },
});

const MarkdownContainer: Component<MarkdownContainerProps> = (
  props: MarkdownContainerProps
) => {
  const procs = (content: string | undefined) => {
    return content != undefined ? marked.parse(content) : "";
  };

  return (
    <div
      class="markdown-container mb-24 w-full"
      innerHTML={procs(props.content)}
    ></div>
  );
};

export default MarkdownContainer;
