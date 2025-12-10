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
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
      <Message text="asistente" role="assistant"/>
      <Message text="usuario" role="user"/>
    </div>
  );
}
