import * as React from "react";

type Props = {
    width: number | undefined,
    height: number | undefined,
    strokeWidth: number | undefined,
    color: string | undefined,
    className: any,
}

function Arrow({width, height, strokeWidth, color, className}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-8 -8 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M418.128 140.5L236.13 45.42a9.998 9.998 0 00-9.26 0L44.871 140.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Arrow;