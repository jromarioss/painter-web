import { useEffect, useState } from "react";

import { useMain } from "@/hooks";

export const useHome = () => {
  const { scrollToTop, setShowMenu } = useMain();
  const [showButtonWhatsapp, setShowButtonWhatsapp] = useState(false);

  const handleGoTo = (value: string) => {
    if (value === "home") {
      setShowMenu(false);
      scrollToTop();
      return;
    }

    const element = document.getElementById(value);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; 
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setShowMenu(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowButtonWhatsapp(true);
      } else {
        setShowButtonWhatsapp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { handleGoTo, showButtonWhatsapp }
}