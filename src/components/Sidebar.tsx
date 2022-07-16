import { Accessor, Component } from "solid-js";

interface SidebarProps {
  isActive: Accessor<boolean>;
}

const Sidebar: Component<SidebarProps> = (props: SidebarProps) => {
  return (
    <nav
      class={`absolute -bottom-screen bg-zinc-100 right-0 h-screen transition-all duration-100 ease-in-out
        ${props.isActive() ? "w-96" : "hidden w-0"}`}
    >
      <h2>Sidebar</h2>
    </nav>
  );
};

export default Sidebar;
