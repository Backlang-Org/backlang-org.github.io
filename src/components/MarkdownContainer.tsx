import { Component } from "solid-js";
import { marked } from "marked";
import { highlight, languages } from "prismjs";
import styles from "./MarkdownContainer.module.css";

languages["back"] = {
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true,
  },
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true,
  },
  boolean: /\b(?:false|true)\b/,
  annotation: {
    pattern: /@\w*(\([^)]*\))?/,
    lookbehind: true,
    alias: "punctuation",
  },
  keyword: [
    /\b(?:inline|this|const|global|in|continue|return|where|type|mut|import|module|using|as|struct|class|interface|let|prop|get|set|implement|of|for|switch|case|break|when|if|else|match|with|while|static|operator|private|protected|public|internal|abstract|override|func|constructor|destructor|enum|union|bitfield|default|sizeof|and|or)\b/,
    /\b(?:bool|char|string|obj|f(?:16|32|64)|[ui](?:8|16|32|64)|none)\b/,
  ],
};

marked.setOptions({
  highlight: (code, lang) => {
    if (languages[lang]) {
      return highlight(code, languages[lang], lang);
    } else {
      return code;
    }
  },
});

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
      class={styles.MarkdownContainer}
      innerHTML={procs(props.content)}
    ></div>
  );
};

export default MarkdownContainer;
