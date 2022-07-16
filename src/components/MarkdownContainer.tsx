import { Component } from "solid-js";
import { marked } from "marked";

interface MarkdownContainerProps {
  content: string | undefined;
}

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
