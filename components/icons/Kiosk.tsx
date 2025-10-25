import React from 'react';

export interface KioskProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Kiosk: React.FC<KioskProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20 3C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H14V22H10V17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3H20ZM4 15H20V5H4V15Z" fill={color}/>
    </svg>
  );
};

export default Kiosk;
