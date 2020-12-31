import React, { useEffect } from "react";
import { useCanvas } from "../hooks/useCanvas";

export const Pagemap = ({ container, options }) => {
  const [canvasRef, setContainerRef, setDrag, drag] = useCanvas(options);

  useEffect(() => {
    setContainerRef(container.current);
  });

  const handleDrag = (ev, container) => {
    ev.preventDefault();
    container.scrollTop =
      ev.offsetY / (options.height / container.scrollHeight);
    container.scrollLeft = ev.offsetX / (options.width / container.scrollWidth);
  };

  const handleOnMouseMove = (ev) => {
    if (drag) {
      handleDrag(ev.nativeEvent, container.current);
    }
  };

  const handleFinishDrag = () => {
    setDrag(false);
  };

  const handleOnMouseDown = (ev) => {
    setDrag(true);
    handleDrag(ev.nativeEvent, container.current);
  };

  return (
    <canvas
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleFinishDrag}
      onMouseLeave={handleFinishDrag}
      onMouseDown={handleOnMouseDown}
      ref={canvasRef}
      style={{ cursor: "pointer" }}
    ></canvas>
  );
};
