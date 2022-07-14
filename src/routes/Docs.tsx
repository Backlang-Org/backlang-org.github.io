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
    <main class="flex h-full">
      <section class="flex flex-col w-96 h-full bg-slate-100">
        <div class="flex w-full h-12 bg-slate-100 items-center pl-4">
          <h2 class="font-inter font-thin">Installation</h2>
        </div>
        <div class="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner">
          <h2 class="font-inter font-thin">Getting Started</h2>
        </div>
      </section>
      <div class="markdown-container bg-white w-full h-full">
        <SolidMarkdown children={markdown} />
      </div>
    </main>
  );
};

export default Docs;
