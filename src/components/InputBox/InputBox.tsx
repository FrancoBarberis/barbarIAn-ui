import { useState } from "react";
import styles from "./InputBox.module.css";

interface InputBoxProps {
  onSendMessage: (message: string) => void;
}

export default function InputBox({ onSendMessage }: InputBoxProps) {
  const [message, setMessage] = useState("");
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        placeholder="Type your message..."
        className={styles.inputField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className={styles.sendButton}
        onClick={() => {
          onSendMessage(message);
          setMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
}
