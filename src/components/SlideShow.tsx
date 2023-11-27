import { useState, useRef, useEffect } from "react";
import img1 from "/images/image1.png";
import img2 from "/images/image2.png";
import img3 from "/images/image3.png";
import img4 from "/images/image4.png";

const delay = 1000;

interface Props {
  className?: string;
}

function Slideshow({ className }: Props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<null | number>(null);
  const images = [img1, img2, img3, img4, img1, img2, img3, img4];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (timeoutRef !== null) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [index]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        style={{
          transform: `translate3d(${-index * 10}%, 0, 0)`,
          whiteSpace: "nowrap",
          transition: "ease 1000ms",
        }}
        className="w-full flex gap-4"
      >
        {images.map((image, index) => (
          <img
            className="inline-block h-[400px] w-[250px] rounded-[40px]"
            key={index}
            alt={"image-" + index}
            src={image}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
