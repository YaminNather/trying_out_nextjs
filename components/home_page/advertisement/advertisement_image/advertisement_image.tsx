import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { InViewHookResponse, useInView } from "react-intersection-observer";

interface Props {
  inView: boolean;
}

const AdvertisementImage: React.FC<Props> = (props) => {
  const scale: number = props.inView ? 1 : 0;

  return (
    // <div ref={inViewHookResponse.ref} className={`d-inline-flex`}>
      <div className={`d-none d-lg-block ${styles.image}`} style={{transform: `scale(${scale})`}}>
        <Image src="/homepage/satisfied-customer.png" layout="responsive" width="900" height="620" />
      </div>
    // </div>
  );
};

export default AdvertisementImage;