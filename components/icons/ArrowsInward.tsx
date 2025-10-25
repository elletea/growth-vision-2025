import React from 'react';

export interface ArrowsInwardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowsInward: React.FC<ArrowsInwardProps> = ({
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
      <path d="M13.4999 12.5C12.9477 12.5 12.5 12.9478 12.4999 13.5V20H14.4999V15.9141L20.7929 22.207L22.207 20.793L15.914 14.5H19.9999V12.5H13.4999Z" fill={color}/>
  <path d="M1.79291 3.20703L8.08588 9.5H3.99994V11.5H10.4999C11.0522 11.5 11.4999 11.0523 11.4999 10.5V4H9.49994V8.08594L3.20697 1.79297L1.79291 3.20703Z" fill={color}/>
    </svg>
  );
};

export default ArrowsInward;
