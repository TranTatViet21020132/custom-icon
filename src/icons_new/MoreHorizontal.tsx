import { SVGIconProps } from "./SVGIconProps";
function MoreHorizontal(props: SVGIconProps) {
  const { width = 24, height = 24, fillColor = "#7A869A", onClick } = props;
  return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path d="M12.4967 12.4953L12.4967 12.5043" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.4967 12.4875L6.4967 12.4965" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.4967 12.5031L18.4967 12.5121" stroke={fillColor} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  );
}
export default MoreHorizontal;
