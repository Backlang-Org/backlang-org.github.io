import * as fs from "node:fs";

const importRegex = /\/\/documentEntriesImport/;
const fileRegex = /\.(js|jsx|ts|tsx)$/;

export default function documentEntriesPlugin() {
  return {
    name: "transform-file",

    enforce: "pre",

    transform(src: string, id: string) {
      if (fileRegex.test(id) && importRegex.test(src)) {
        console.log("\nimported DocumentEntryButtons in " + id);
        return {
          code: src
            .replace(
              "//documentEntriesImport",
              `import DocumentEntryButton, { ChildDocumentEntryButton, } from "../components/DocumentEntryButton";`
            )
            .replace("{/*documentEntriesPlace*/}", generateButtons()),
          map: null,
        };
      }
    },
  };
}

function generateButtons(): string {
  const data = fs.readFileSync("./documentEntries.json", "utf8");

  const json = JSON.parse(data);

  return generateButton(json, "DocumentEntryButton", "", 4);
}

function generateButton(
  json: any,
  elem: string,
  basePath: string,
  indent: number
): string {
  let result = "";

  if (json == null) return result;

  json.forEach((entry: any) => {
    let hasChildren = entry.children != undefined;
    result = result.concat(
      `<${elem} name="${entry.name}" path="${basePath}${
        entry.path
      }" indent={${indent}}>${
        hasChildren
          ? generateButton(
              entry.children,
              "ChildDocumentEntryButton",
              `${basePath}${entry.path}/`,
              indent + 6
            )
          : ""
      }</${elem}>`
    );
  });

  return result;
}
