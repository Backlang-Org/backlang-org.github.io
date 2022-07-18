import { NavLink, useLocation, useResolvedPath } from "solid-app-router";
import { children, Component, createMemo, JSX } from "solid-js";

interface DocumentEntryButtonProps {
  name: string;
  path: string;
  children?: JSX.Element;
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
        inactiveClass="flex w-full h-12 bg-slate-100 items-center pl-4 focus:outline-none"
        activeClass="flex w-full h-12 bg-slate-50 items-center pl-4 shadow-inner focus:outline-none"
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
  return (
    <NavLink
      inactiveClass="flex w-full h-10 bg-slate-100 items-center pl-10 focus:outline-none"
      activeClass="flex w-full h-10 bg-slate-50 items-center pl-10 shadow-inner focus:outline-none"
      href={`/learn/${props.path}`}
    >
      <h2 class="font-inter font-thin">{props.name}</h2>
    </NavLink>
  );
};
