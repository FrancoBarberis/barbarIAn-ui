
import { useState } from "react";
import {
  layout,
  header,
  body,
  sidebar,
  content,
  footer,
} from "./MainLayout.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "BarbarIAn",
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={layout}>
      <aside className={`${sidebar} ${collapsed ? "collapsed" : ""}`}>
        <button onClick={handleToggleSidebar}>
          {collapsed ? "Abrir" : "Cerrar"}
        </button>
        {!collapsed && <p>Aún no tienes chats</p>}
      </aside>

      <div className={body}>
        <header className={header}>
          <h1>{title}</h1>
        </header>
        <main className={content}>{children}</main>
        <footer className={footer}>Footer</footer>
      </div>
    </div>
  );
};
