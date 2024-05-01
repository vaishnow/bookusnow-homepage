import { DependencyList, useCallback, useRef } from "react";

const useIntersectionObserver = <T extends HTMLElement>(
  callback: () => void,
  dependencies: DependencyList
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const triggerRef = useCallback(
    (node: T) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
      if (node) observer.current.observe(node);
    },
    [dependencies]
  );

  return triggerRef;
};

export default useIntersectionObserver;
