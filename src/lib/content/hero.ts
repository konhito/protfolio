import { HeroSectionType } from "@/lib/types/sections";
import { resumeFileName } from "@/lib/utils/config";

export const heroSection: HeroSectionType = {
  subtitle: "Hi, my name is",
  title: "Aditya Singh.",
  tagline: "I create visually pleasing interfaces for the web.",
  description:
    "I develop open-source full-stack apps/tools and occasionally take on freelance projects.",
  specialText: "Currently available for a job & freelance",
  cta: {
    title: "see my resume",
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
