import { ReactNode, createContext, useEffect, useState } from "react";

export const WindowSizeContext = createContext<{
  windowWidth: number;
  windowHeight: number;
}>({
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
});

let timer: number;

export const WindowSizeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  const changeSize = () => {
    window.clearTimeout(timer);

    timer = window.setTimeout(() => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={{ windowWidth, windowHeight }}>
      {children}
    </WindowSizeContext.Provider>
  );
};
