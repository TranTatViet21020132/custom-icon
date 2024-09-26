import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function ArrowRight(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M19 11.9998L4 11.9998" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.9998 6.99988L19.2927 11.2928C19.626 11.6261 19.7927 11.7928 19.7927 11.9999C19.7927 12.207 19.626 12.3737 19.2927 12.707L14.9998 16.9999" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default ArrowRight;
