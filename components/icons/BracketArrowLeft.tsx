import React from 'react';

export interface BracketArrowLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BracketArrowLeft: React.FC<BracketArrowLeftProps> = ({
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
      <path d="M8 5H5V19H8V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H8V5Z" fill={color}/>
  <path d="M13.707 8.20703L10.9141 11H21V13H10.9141L13.707 15.793L12.293 17.207L7.79297 12.707C7.60543 12.5195 7.5 12.2652 7.5 12C7.5 11.7348 7.60544 11.4805 7.79297 11.293L12.293 6.79297L13.707 8.20703Z" fill={color}/>
    </svg>
  );
};

export default BracketArrowLeft;
