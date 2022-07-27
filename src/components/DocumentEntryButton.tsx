import { NavLink, useLocation, useResolvedPath } from "solid-app-router";
import { Component, createMemo, JSX } from "solid-js";

interface DocumentEntryButtonProps {
  name: string;
  path: string;
  children?: JSX.Element;
  indent: number;
}

const DocumentEntryButton: Component<DocumentEntryButtonProps> = (
  props: DocumentEntryButtonProps
) => {
  const href = `/learn/${props.path}`;

  const location = useLocation();
  const to = useResolvedPath(() => href);
  const isActive = createMemo(() => {
    const to_ = to();

    if (to_ === undefined) {
      return false;
    }

    const path = to_.split(/[?#]/, 1)[0].toLowerCase();
    const loc = location.pathname.toLowerCase();
    return loc.startsWith(path);
  });

  return (
    <>
      <NavLink
        inactiveClass={`flex w-full h-12 bg-slate-100 items-center focus:outline-none`}
        activeClass={`flex w-full h-12 bg-slate-50 items-center shadow-inner focus:outline-none`}
        style={`padding-left: ${props.indent * 4}px;`}
        end={true}
        href={`/learn/${props.path}`}
      >
        <h2 class="font-inter font-thin">{props.name}</h2>
      </NavLink>
      {isActive() && props.children}
    </>
  );
};

export default DocumentEntryButton;

export const ChildDocumentEntryButton: Component<DocumentEntryButtonProps> = (
  props: DocumentEntryButtonProps
) => {
  const href = `/learn/${props.path}`;

  const location = useLocation();
  const to = useResolvedPath(() => href);
  const isActive = createMemo(() => {
    const to_ = to();

    if (to_ === undefined) {
      return false;
    }

    const path = to_.split(/[?#]/, 1)[0].toLowerCase();
    const loc = location.pathname.toLowerCase();
    return loc.startsWith(path);
  });

  return (
    <>
      <NavLink
        inactiveClass={`flex w-full h-10 bg-slate-100 items-center focus:outline-none`}
        activeClass={`flex w-full h-10 bg-slate-50 items-center shadow-inner focus:outline-none`}
        style={`padding-left: ${props.indent * 4}px;`}
        end={true}
        href={`/learn/${props.path}`}
      >
        <h2 class="font-inter font-thin">{props.name}</h2>
      </NavLink>
      {isActive() && props.children}
    </>
  );
};
