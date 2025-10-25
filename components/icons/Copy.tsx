import React from 'react';

export interface CopyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Copy: React.FC<CopyProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7C20.2652 7 20.5195 7.10544 20.707 7.29297C20.8946 7.4805 21 7.73479 21 8V21C21 21.5523 20.5523 22 20 22H9C8.44772 22 8 21.5523 8 21V8L8.00488 7.89746C8.05622 7.39334 8.48233 7 9 7H20ZM10 20H19V9H10V20Z" fill={color}/>
  <path d="M16 4H5V17H3V3C3 2.73478 3.10543 2.48051 3.29297 2.29297C3.48051 2.10543 3.73478 2 4 2H16V4Z" fill={color}/>
    </svg>
  );
};

export default Copy;
