
import styles from "./ChatSidebar.module.css";
import UserProfile from "../UserProfile/UserProfile";
import { useState } from "react";
import { useChatStore } from "../../store/chatStore";
import clsx from "clsx";

const ChatSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true); // se mantiene local

  const chats = useChatStore((s) => s.chats);
  const selectedChatId = useChatStore((s) => s.selectedChatId);
  const selectChat = useChatStore((s) => s.selectChat);
  const createChat = useChatStore((s) => s.createChat);

  return (
    <aside className={clsx(styles.chatSidebar, { [styles.collapsed]: collapsed} )} onMouseEnter={() => setCollapsed((prev) => (!prev))} onMouseLeave={() => setCollapsed((prev) => (!prev))}>
      <button className={clsx(styles.newChat, {[styles.hidden]:collapsed})} onClick={() => createChat("Nuevo chat")}>+</button>
      <div className={clsx(styles.chatList, { [styles.hidden]: collapsed , [styles.centered]:chats.length==0})}>
        {/* Lista de chats */}
        {chats.map((chat) => {
          const isActive = chat.id === selectedChatId;
          return (
            <div
              role="button"
              tabIndex={0}
              className={clsx(styles.chat, { [styles.active]: isActive })}
              onClick={() => selectChat(chat.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") selectChat(chat.id);
              }}
            >
              <div className={styles.messageTitle}>{chat.title}</div>
            </div>

          );
        })}

        {/* Si la lista está vacía, un placeholder breve */}
        {chats.length === 0 && (
          <p className={styles.message}>No hay chats. Creá uno para empezar.</p>
        )}
      </div>
      <UserProfile />
    </aside>
  );
};

export default ChatSidebar;
