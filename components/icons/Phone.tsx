import React from 'react';

export interface PhoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Phone: React.FC<PhoneProps> = ({
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
      <path d="M15.5 18H8.5V16H15.5V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17.5 2C18.6046 2 19.5 2.89543 19.5 4V20C19.5 21.1046 18.6046 22 17.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20V4C4.5 2.89543 5.39543 2 6.5 2H17.5ZM6.5 20H17.5V4H6.5V20Z" fill={color}/>
    </svg>
  );
};

export default Phone;
