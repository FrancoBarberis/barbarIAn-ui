
import styles from "./Message.module.css";
import clsx from "clsx";

interface MessageProps {
  text: string;
  role: "user" | "assistant";
}

const Message: React.FC<MessageProps> = ({ text, role }) => {
  return (
    <div
      className={clsx(
        styles.message,                // estilos comunes (burbuja, padding, etc.)
        role === "assistant" && styles.assistant,
        role === "user" && styles.user
      )}
    >
      {text}
    </div>
  );
};

export default Message;
