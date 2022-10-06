import { Component } from "solid-js";

const GettingStarted: Component = () => {
  return (
    <main class="overflow-hidden bg-white px-14 py-8">
      <ol class="peepoHi">
        <li>
          Install{" "}
          <a
            href="https://dotnet.microsoft.com/en-us/download/dotnet/7.0"
            target="_blank"
          >
            .Net 7 Preview
          </a>
        </li>
        <li>
          Download the{" "}
          <a
            href="https://github.com/Backlang-Org/Backlang/releases"
            target="_blank"
          >
            Backlang Compiler binary
          </a>
        </li>
        <li>Start coding</li>
      </ol>
    </main>
  );
};

export default GettingStarted;
