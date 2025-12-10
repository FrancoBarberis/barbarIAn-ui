
import { useState } from "react";
import styles from "./InputBox.module.css";

interface InputBoxProps {
  onSendMessage: (message: string) => void;
}

export default function InputBox({ onSendMessage }: InputBoxProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();               // evita recarga
    const trimmed = message.trim();
    if (!trimmed) return;             // no enviar vacío
    onSendMessage(trimmed);
    setMessage("");
  };

  return (
    <form className={styles.inputBox} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        className={styles.inputField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        autoComplete="off"
      />
      <button
        className={styles.sendButton}
        type="submit"
        disabled={!message.trim()}
      >
        Send
      </button>
    </form>
  );
}
