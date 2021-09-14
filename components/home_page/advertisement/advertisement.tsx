import React from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import AdvertisementHeadings from "./advertisement_headings/advertisement_headings";
import AdvertisementImage from "./advertisement_image/advertisement_image";
import styles from "./styles.module.scss";

const Advertisement: React.FC = () => {
  const inViewHookResponse: InViewHookResponse = useInView();

  return (
    <section ref={inViewHookResponse.ref} className={`mt-5 pb-3`}>
      <div className={`mx-5 ${styles.advertisement}`}>
        <div className={`d-flex`}>
          <AdvertisementImage inView={inViewHookResponse.inView} />
          
          <AdvertisementHeadings inView={inViewHookResponse.inView} />
        </div>
      </div>      
    </section>
  );
};

export default Advertisement;