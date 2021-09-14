import React, { useEffect } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import Heading from "./heading/heading";
import styles from "./styles.module.scss";


interface Props {
  inView: boolean;
}

const AdvertisementHeadings: React.FC<Props> = (props) => {

  useEffect(
    () => console.log(`CustomLog: AdvertisementHeadings inView = ${props.inView}`)
  );

  return (
    <div className={`d-inline-flex px-4 py-5 justify-content-center align-items-center`}>
      <div className={`d-inline-flex ${styles.floatingbox} flex-column justify-content-center align-items-stretch text-light`}>
        <Heading iconName="person-check" heading="Customer-Centric Sales Approach" index={0} inView={props.inView} />

        <Heading iconName="award" heading="Trusted Professionals" index={1} inView={props.inView} />

        <Heading iconName="hourglass-split" heading="Significant Time Savings" index={2} inView={props.inView} />
        
        <Heading iconName="watch" heading="Always Available" index={3} inView={props.inView} />
      </div>
    </div>
  );
};

export default AdvertisementHeadings;