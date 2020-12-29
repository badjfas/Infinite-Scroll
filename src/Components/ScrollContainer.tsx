import React, { useCallback, useRef, useState } from "react";
import ScrollPresenter from "./ScrollPresenter";

interface I {
  ScrollHeight: string;
  ScrollTop: string;
}

const ScrollContainer = () => {
  const scrollRef = useRef(null);
  const [count, setCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const handleTimer = () => {
    setTimeout(() => {
      setCount(count + 8);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLElement>) => {
      const { scrollHeight, scrollTop, clientHeight } = scrollRef.current;
      console.log(scrollHeight, scrollTop, clientHeight);
      if (scrollHeight - scrollTop - 10 <= clientHeight) {
        setLoading(true);
        handleTimer();
      }
    },
    [count, handleTimer]
  );

  return (
    <ScrollPresenter
      scrollRef={scrollRef}
      handleScroll={handleScroll}
      count={count}
      loading={loading}
    />
  );
};

export default ScrollContainer;
