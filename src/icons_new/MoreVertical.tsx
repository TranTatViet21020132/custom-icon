import { SVGIconProps } from "./SVGIconProps";
function MoreVertical(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M11.992 12H12.001" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9842 18H11.9932" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9998 6H12.0088" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default MoreVertical;
