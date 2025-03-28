// TypingEffect.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Web Developer", "Software Developer", "Full Stack Engineer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.current.destroy(); // cleanup
    };
  }, []);

  return (
    <span className="typing" ref={el}></span>
  );
};

export default TypingEffect;
