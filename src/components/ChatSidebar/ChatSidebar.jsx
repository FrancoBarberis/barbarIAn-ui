import styles from "./ChatSidebar.module.css";

export default function ChatSidebar() {
  return (
    <div className={styles.chatSidebar}>
      <button className={styles.toggleSidebar}>X</button>
      <h2>Chat Sidebar</h2>
    </div>
  );
}