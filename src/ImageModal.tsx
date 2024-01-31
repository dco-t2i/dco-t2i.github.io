import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { WindowSizeContext } from "./contexts/WindowSizeContext";

interface Props {
  imgUrl: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ImageModal = ({ imgUrl, setOpen }: Props) => {
  const { windowWidth, windowHeight } = useContext(WindowSizeContext);
  const texture = new Image();
  texture.src = imgUrl;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.key === "Escape" && setOpen(false);
    },
    [setOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const handleClickBackground: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black/50 z-10"
      onClick={handleClickBackground}
    >
      <img
        src={texture.src}
        alt={imgUrl}
        width={Math.min(
          Math.max(windowWidth * 0.5, windowHeight * 0.7, 800),
          windowWidth * 0.8,
          windowHeight * 0.8
        )}
        height={Math.min(
          Math.max(windowWidth * 0.5, windowHeight * 0.7, 800),
          windowWidth * 0.8,
          windowHeight * 0.8
        )}
      />
    </div>
  );
};

export default ImageModal;
