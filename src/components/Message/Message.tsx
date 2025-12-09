import styles from "./Message.module.css";

interface MessageProps {
  text: string;
  role: "user" | "assistant";
}

const Message: React.FC<MessageProps> = ({ text, role }) => {
  return <div className={styles.message}>{text}</div>;
};

export default Message;
