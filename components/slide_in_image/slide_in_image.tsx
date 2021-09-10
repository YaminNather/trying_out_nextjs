import Image from 'next/image';
import { useEffect, useState } from 'react';
import { InViewHookResponse, useInView } from 'react-intersection-observer';

interface Props {  
  src: string;
  transform: string;
  transitionTime?: string;
}

const SlideInImage: React.FC<Props> = (props) => {
  const inViewHookResponse: InViewHookResponse = useInView();

  function calcXOffset(): string {    
    return inViewHookResponse.inView ? "translate(0, 0)" : props.transform;
  }

  console.log(`transform = ${calcXOffset()}, transitionTime = ${props.transitionTime}`);

  useEffect(() => console.log(`Rerendered Image. InView status = ${inViewHookResponse.inView}`));

  return (
    <div ref={inViewHookResponse.ref}>
      <div style={{position: "relative", transform: calcXOffset(), transition: props.transitionTime}}>
        <Image width={0} height={0} layout="responsive" src={props.src} />
      </div>
    </div>
  );
}

SlideInImage.defaultProps = {
  transitionTime: "1s"
};

export default SlideInImage;