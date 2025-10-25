import React from 'react';

export interface SquareStandMountProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareStandMount: React.FC<SquareStandMountProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M15 10C15.033 10 15.0661 10.0017 15.0986 10.0049C15.3276 10.0276 15.5429 10.1289 15.707 10.293C15.8945 10.4805 16 10.7348 16 11V20H18V22H6V20H8V11C8.00001 10.4478 8.44781 10.0001 9 10H15ZM10 20H14V12H10V20Z" fill={color}/>
  <path d="M20 3C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H18V15H20V5H4V15H6V17H4C3.93108 17 3.86302 16.9961 3.7959 16.9893C2.78732 16.8869 2.00002 16.0356 2 15V5C2 3.89549 2.89552 3.0001 4 3H20Z" fill={color}/>
    </svg>
  );
};

export default SquareStandMount;
