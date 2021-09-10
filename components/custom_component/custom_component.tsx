import { useEffect, useState } from "react";

export default function CustomComponent() {  
  const [onScreen, setOnScreen] = useState<boolean>(false);

  useEffect(
    () => {
      const custom_component: HTMLElement | null = document.getElementById("custom_component");
      
      if(custom_component == null) {
        alert("Couldn't find custom component");

        return;
      }
      
      const observer: IntersectionObserver = new IntersectionObserver(
        ([entry]) => setOnScreen(entry.isIntersecting)
      );
      
      observer.observe(custom_component);
      
      return () => observer.unobserve(custom_component);
    }, 
    []
  );

  useEffect(
    () => alert(`Is on screen? = ${onScreen}`),
    [onScreen]
  );

  return (
    <span id="custom_component" style={{margin: 900}}>{!onScreen ? "a" : "b"}</span>
  );
}