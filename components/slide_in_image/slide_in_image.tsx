import Image from 'next/image';
import { useEffect, useState } from 'react';
import { InViewHookResponse, useInView } from 'react-intersection-observer';

interface Props {  
  transform: string;
  transitionTime?: string;
}

const SlideInImage: React.FC<Props> = (props) => {
  const inViewHookResponse: InViewHookResponse = useInView();

  function calcOffset(): string {
    return inViewHookResponse.inView ? "translate(0, 0)" : props.transform;
  }

  useEffect(() => console.log(`Rerendered Image. InView status = ${inViewHookResponse.inView}`));

  return (
    <div ref={inViewHookResponse.ref}>
      <div style={{position: "relative", transform: calcOffset(), transition: props.transitionTime}}>
        {props.children}
      </div>
    </div>
  );
}

SlideInImage.defaultProps = {
  transitionTime: "1s"
};

export default SlideInImage;