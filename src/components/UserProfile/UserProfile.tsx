import styles from "./UserProfile.module.css";
import clsx from "clsx";

const UserProfile : React.FC = () => {
  return (
    <div className={styles.userProfile}>
      <img src="/path/to/avatar.jpg" alt="User Avatar" className={styles.avatar} />
      <h2 className={styles.username}>Franco Barberis</h2>
    </div>
  );
}

export default UserProfile;