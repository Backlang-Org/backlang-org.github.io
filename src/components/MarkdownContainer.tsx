import { Component } from "solid-js";
import { marked } from "marked";

const MarkdownContainer: Component<{ content: string | undefined }> = (props: {
  content: string | undefined;
}) => {
  const procs = (content: string | undefined) => {
    return content != undefined ? marked.parse(content) : "";
  };

  return (
    <div
      class="markdown-container bg-white mb-60 w-full h-full overflow-hidden"
      innerHTML={procs(props.content)}
    ></div>
  );
};

export default MarkdownContainer;
