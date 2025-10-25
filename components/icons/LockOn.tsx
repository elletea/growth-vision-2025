import React from 'react';

export interface LockOnProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LockOn: React.FC<LockOnProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19 10C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10H7V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V10H19ZM15 10V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V10H15ZM5 20H19V12H5V20Z" fill={color}/>
    </svg>
  );
};

export default LockOn;
