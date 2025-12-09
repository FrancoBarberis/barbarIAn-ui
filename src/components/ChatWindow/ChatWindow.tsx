import styles from "./ChatWindow.module.css";
import { useState } from "react";
import Message from "../Message/Message";
import type { Message as MessageType } from "../../types/messageType";

interface ChatWindowProps {
  messagesList: MessageType[];
}

export default function ChatWindow({ messagesList }: ChatWindowProps) {
  const [messages, setMessages] = useState<MessageType[]>(messagesList);

  return (
    <div className={styles.chatWindow}>
      {messages.map((msg, index) => (
        <div key={index}>
          {/* TODO: RENDERIZAR A IZQUIERDA PARA ASSISTANT, DERECHA PARA USER */}
          <Message text={msg.text} role={msg.role} />
        </div>
      ))}
    </div>
  );
}
