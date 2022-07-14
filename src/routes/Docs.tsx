import { Component } from "solid-js";
import SolidMarkdown from "solid-markdown";

const markdown = `
# 1. Install DotNet 7 Preview

- lol
- this

\`code\`

* works
* omg!

Normal text

### 3.

## 2.`;

const Docs: Component = () => {
  return (
    <div class="markdown-container bg-white">
      <SolidMarkdown children={markdown} />
    </div>
  );
};

export default Docs;
