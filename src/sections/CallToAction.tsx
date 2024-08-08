"use client";
import gridLines from "@/assets/grid-lines.png";
import starsBg from "@/assets/stars.png";
import Button from "@/components/Button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);

  // For parallax scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  // hover effect
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          className="group relative cursor-default overflow-hidden rounded-xl border border-white/15 py-24"
          style={{
            backgroundImage: `url(${starsBg.src})`,
            backgroundPositionY,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] opacity-0 bg-blend-overlay transition duration-700 group-hover:opacity-100"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="mx-auto max-w-sm text-center text-5xl font-medium tracking-tighter md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mx-auto mt-5 max-w-xs px-4 text-center text-lg tracking-tight text-white/70 md:text-xl">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-8 flex justify-center">
              <Button> Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
