import React from 'react';

export interface BracketArrowRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BracketArrowRight: React.FC<BracketArrowRightProps> = ({
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
  <path d="M20.707 11.293C20.8946 11.4805 21 11.7348 21 12C21 12.2321 20.9193 12.4558 20.7734 12.6338L20.707 12.707L16.207 17.207L14.793 15.793L17.5859 13H7.5V11H17.5859L14.793 8.20703L16.207 6.79297L20.707 11.293Z" fill={color}/>
    </svg>
  );
};

export default BracketArrowRight;
