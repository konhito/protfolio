"use client";
import { heroSection } from "@/lib/content/hero";
import useWindowWidth from "@/lib/hooks/use-window-width";
import { getBreakpointsWidth } from "@/lib/utils/helper";

import { Button, Wrapper } from "@/components";

import { slideUp } from "@/styles/animations";

import { motion } from "framer-motion";
import TypingAnimation from "@/components/TypingAnimation";

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth("md");
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent"
      >
        {subtitle}
      </motion.p>

      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="leading-[1.2]"
        >
          <h1 className="font-heading flex items-center gap-3 lg:text-3xl">
            <span className="text-slate-600 dark:text-slate-400 tracking-normal">
              I am
            </span>
            <span className="text-accent">a</span>
            <TypingAnimation />
          </h1>
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg"
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="font-mono text-xs md:text-sm text-accent"
      >
        {specialText}
      </motion.p>
      {/* <Button
        type="link"
        size="lg"
        href="https://www.fiverr.com/jay_won2"
        center
        className="mt-12"
      >
        Say Hello
      </Button> */}

      {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? "#"}
          className={`mt-5 xs:mt-8 md:mt-10 ${
            cta.hideInDesktop ? "md:hidden" : ""
          }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
