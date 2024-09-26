import React from "react";
import { SVGIconProps } from "./SVGIconProps";
function HandoutsSolid(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5833 0.75C13.5342 0.749988 15.0706 0.749978 16.2712 0.902422C17.5001 1.05847 18.4904 1.38575 19.2745 2.12631C20.0647 2.87259 20.4194 3.82468 20.5875 5.00521C20.75 6.14729 20.75 7.60545 20.75 9.44072V9.44074V9.96542C20.75 10.4884 20.75 10.7499 20.6162 10.8389C20.4824 10.9279 20.2085 10.8133 19.6606 10.584C19.1448 10.368 18.5816 10.25 18 10.25C15.7349 10.25 13.75 12.0404 13.75 14.4287C13.75 15.3875 14.0699 16.2499 14.5994 16.9388L14.5994 16.9388C14.8923 17.32 15.0388 17.5105 15.0127 17.6436C14.9867 17.7766 14.7901 17.8914 14.397 18.1209C13.6076 18.5818 12.8992 19.2001 12.3286 19.9678C12.0001 20.4098 11.8558 20.9237 11.8106 21.6501C11.7925 21.9415 11.7835 22.0872 11.6969 22.1686C11.6103 22.25 11.4715 22.25 11.1941 22.25H11.1941L10.4167 22.25C8.46586 22.25 6.92941 22.25 5.72885 22.0976C4.49987 21.9415 3.50965 21.6142 2.72552 20.8737C1.93534 20.1274 1.5806 19.1753 1.41255 17.9948C1.24997 16.8527 1.24998 15.3946 1.25 13.5593V13.5593V9.44067V9.44066C1.24998 7.6054 1.24997 6.14729 1.41255 5.00521C1.5806 3.82468 1.93535 2.87259 2.72552 2.12631C3.50965 1.38575 4.49987 1.05847 5.72885 0.902421C6.92941 0.749978 8.46584 0.749988 10.4167 0.75H10.4167H11.5833ZM7 5.5C6.44772 5.5 6 5.94772 6 6.5C6 7.05228 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.05228 16 6.5C16 5.94772 15.5523 5.5 15 5.5H7ZM7 10.5C6.44772 10.5 6 10.9477 6 11.5C6 12.0523 6.44772 12.5 7 12.5H11C11.5523 12.5 12 12.0523 12 11.5C12 10.9477 11.5523 10.5 11 10.5H7Z" fill={fillColor}/>
    <path d="M15.25 14.4287C15.25 12.9239 16.5071 11.75 18 11.75C19.4929 11.75 20.75 12.9239 20.75 14.4287C20.75 15.9335 19.4929 17.1074 18 17.1074C16.5071 17.1074 15.25 15.9335 15.25 14.4287Z" fill={fillColor}/>
    <path d="M13.5325 20.8626C15.6777 17.9765 20.2703 17.7998 22.4798 20.8737C22.6685 21.1363 22.75 21.441 22.75 21.7289C22.75 22.569 22.069 23.25 21.2289 23.25H14.7666C13.929 23.25 13.25 22.571 13.25 21.7334C13.25 21.4399 13.3348 21.1285 13.5325 20.8626Z" fill={fillColor}/>
  </svg>
  );
}
export default HandoutsSolid;
