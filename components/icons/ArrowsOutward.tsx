import React from 'react';

export interface ArrowsOutwardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowsOutward: React.FC<ArrowsOutwardProps> = ({
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
      <path d="M12.793 14.207L18.5859 20H14.5V22H21C21.5523 22 22 21.5523 22 21V14.5H20V18.5859L14.207 12.793L12.793 14.207Z" fill={color}/>
  <path d="M4 3C3.44774 3.00003 3 3.44774 3 4V10.5H5V6.41406L10.793 12.207L12.207 10.793L6.41406 5H10.5V3H4Z" fill={color}/>
    </svg>
  );
};

export default ArrowsOutward;
