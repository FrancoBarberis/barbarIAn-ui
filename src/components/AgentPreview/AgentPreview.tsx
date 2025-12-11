
// src/components/AgentPreview/AgentPreview.tsx
import React from "react";
import styles from "./AgentPreview.module.css";
import AgentIdleIMG from "../../assets/thinking.jpg";

const AgentPreview: React.FC = () => {
  return (
    <div className={styles.AgentPreview}>
      <h2 className={styles.title}>Barbar<span>IA</span>n</h2>
      <img
        src={AgentIdleIMG}
        alt="Agent preview image"
        className={styles.image}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default AgentPreview;
