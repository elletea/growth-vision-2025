import React from 'react';

export interface ArrowRightMotionLinesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowRightMotionLines: React.FC<ArrowRightMotionLinesProps> = ({
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
      <path d="M23.7075 11.2925C23.8949 11.48 24.0004 11.7345 24.0005 11.9996C24.0005 12.2646 23.8948 12.5191 23.7075 12.7066L18.4141 18.0001L17 16.586L20.5864 12.9996H8.00049V10.9996H20.5864L17 7.41309L18.4141 5.99902L23.7075 11.2925Z" fill={color}/>
  <path d="M2 16.0001H11V18.0001H2V16.0001Z" fill={color}/>
  <path d="M5 6.00006H14V8.00006H5V6.00006Z" fill={color}/>
    </svg>
  );
};

export default ArrowRightMotionLines;
