import React from "react";
import styles from "./styles.module.scss";

interface Props {
  iconName: string;
  heading: string;
  index: number; 
  inView: boolean;
}

const Heading: React.FC<Props> = (props) => {
  const offset: number = (props.inView) ? 0 : (props.index + 1) * 256;
  const delay: number = props.index * 100;

  const cssProperties: React.CSSProperties = {
    transform: `translateX(${offset}px)`,
    transitionDelay: `${delay}ms`
  };

  return(
    <div className={`${styles.floating_tag} p-3 mt-4 d-inline-flex align-items-center`} style={cssProperties}>
      <div className= {`flex-shrink-0 d-inline-flex ${styles.icon_container} rounded-circle justify-content-center align-items-center`}>
        <i className={`${styles.icon} bi bi-${props.iconName}`} />
      </div>

      <span className="ms-3 fs-5 fw-bold text-dark">
        {props.heading}
      </span>
    </div>
  );
};

export default Heading;