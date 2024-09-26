import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function SlashForward(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M16.0706 4.79917L8.07056 18.6556" stroke={fillColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default SlashForward;
