import { useEffect, useCallback, useState } from "react";

export const useDetectScrolledToBottom = (node) => {
  const [isBottom, setIsBottom] = useState(false);
  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = node.current;
    if (scrollTop + clientHeight === scrollHeight) {
      console.log("reached bottom hook");
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, [node]);
  useEffect(() => {
    if (node.current) {
      node.current.addEventListener("scroll", handleScroll);
      return () => node.current.removeEventListener("scroll", handleScroll);
    }
  }, [node, handleScroll]);
  return { isBottom };
};

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
