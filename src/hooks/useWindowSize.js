import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const useWindowSize = () => {
  const [size, setSize] = useState({ innerWidth: "", innerHeight: "" });
  const [debouncedSize, setDebouncedSize] = useState(size);

  useEffect(() => {
    const handleWindowResize = () => {
      setSize(getWindowSize);
    };

    setSize(getWindowSize());

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedSize(size);
    }, 10);

    return () => clearTimeout(timerID);
  }, [size]);

  return debouncedSize;
};

export default useWindowSize;
