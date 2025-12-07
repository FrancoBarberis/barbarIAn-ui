import React from "react";
import styles from "./Home.module.css";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import ChatSidebar from "../../components/ChatSidebar/ChatSidebar";
import InputBox from "../../components/InputBox/InputBox";

const Home: React.FC = () => {
  const onSendMessage = (message: string) => {
    console.log(message);
  };
  return (
    <div className={styles.container}>
      <ChatSidebar />
      <div className={styles.chatArea}>
        <ChatWindow />
        <InputBox onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default Home;
