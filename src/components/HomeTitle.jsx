import { useState, useEffect } from "react";

const HomeTitle = ({ className, duration }) => {
  const titles = [
    "Do You Think Yor Know Programming?",
    "Challenge Your Code IQ!",
    "Prove Your Skills!",
    "Ready To Scratch Your Head!",
  ];

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * titles.length);
      setCurrentTitle(titles[randomIndex]);
    }, duration);

    return () => clearInterval(interval);
  }, [titles]);

  return <h1 className={className}>{currentTitle}</h1>;
};

HomeTitle.defaultProps = {
  duration: 10000,
};

export default HomeTitle;
