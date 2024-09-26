import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function Clock(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <circle cx="12" cy="12" r="10" stroke={fillColor} stroke-width="1.5"/>
    <path d="M12 8V12L14 14" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default Clock;
