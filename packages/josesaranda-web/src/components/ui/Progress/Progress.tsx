import React, { useEffect, useState } from "react";

export const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.offsetHeight -
        document.documentElement.clientHeight;

      setProgress((winScroll / height) * 100);
    };
  }, []);

  return (
    <div
      className="post-progress-container"
      style={{ opacity: progress ? "1" : "0" }}
    >
      <div className="post-progress" style={{ width: progress + "%" }}></div>
    </div>
  );
};
