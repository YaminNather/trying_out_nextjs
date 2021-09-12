import React from "react";
import styles from "./animated_title.module.scss";

const AnimatedTitle: React.FC = () => {
  return (
    <h1 className={`${styles.animated_title}`} data-text="Virtual Assistant">Virtual Assistant</h1>
  );
};

export default AnimatedTitle;