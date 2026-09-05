import { useRef } from "react";
import { useReducedMotion } from "@/lib/prefers-reduced-motion";
import { easeOut, gsap, registerGsap, useGSAP } from "@/lib/gsap";

registerGsap();

export function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || reduce) return;
      gsap.fromTo(
        root,
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55, ease: easeOut, clearProps: "transform,visibility,opacity" },
      );
    },
    { dependencies: [reduce] },
  );

  return (
    <h1 ref={ref} className="max-w-lg text-4xl leading-[1.08] sm:text-5xl">
      Read with <em className="font-medium italic">effortless</em> clarity.
    </h1>
  );
}
