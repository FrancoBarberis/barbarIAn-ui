
// Home.tsx
import React from "react";
import styles from "./Home.module.css";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import InputBox from "../../components/InputBox/InputBox";
import { useChatStore } from "../../store/chatStore";

const Home: React.FC = () => {
  // Selectores del store (Zustand)
  const chats = useChatStore((s) => s.chats);
  const selectedChatId = useChatStore((s) => s.selectedChatId);
  const sendMessage = useChatStore((s) => s.sendMessage);

  // Derivar la lista de mensajes del chat seleccionado (como antes)
  const messagesList =
    chats.find((c) => c.id === selectedChatId)?.messages ?? [];

  // Función que ya tenías, pero ahora usa la acción global
  const onSendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    sendMessage(trimmed, "user");
  };

  return (
    <div className={styles.container}>
      <ChatSidebar />
      <div className={styles.chatArea}>
        {/* Mantener props si tu UI depende de eso */}
        <ChatWindow messagesList={messagesList} />
        <InputBox onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default Home;
