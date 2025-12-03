import styles from "./InputBox.module.css";

export default function InputBox() {
  return (
    <div className={styles.inputBox}>
      <input type="text" placeholder="Type your message..." className={styles.inputField} />
      <button className={styles.sendButton}>Send</button>
    </div>
  );
}