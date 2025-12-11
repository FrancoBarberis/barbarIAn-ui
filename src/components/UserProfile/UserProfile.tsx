import styles from "./UserProfile.module.css";
import { useUIStore } from "../../store/uiStore";
import clsx from "clsx";
import HelmetIMG from "../../assets/Helmet.png"

const UserProfile : React.FC = () => {
  const collapsed = useUIStore((s) => (s.collapsed))
  return (
    <div className={clsx(styles.userProfile)}>
      <img src={HelmetIMG} alt="User Avatar" className={styles.avatar} />
      <h2 className={clsx(styles.username, {[styles.collapsed]:collapsed})}>Franco Barberis</h2>
    </div>
  );
}

export default UserProfile;