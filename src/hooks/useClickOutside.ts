import { useState, useEffect, useRef, MutableRefObject } from "react";

export default function useClickOutside(
  initialIsVisible: boolean,
  buttonRef?: MutableRefObject<HTMLButtonElement | null>,
) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      (!buttonRef ||
        !buttonRef.current ||
        !buttonRef.current.contains(event.target as Node))
    ) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
