import React from 'react';

export interface LockOffProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LockOff: React.FC<LockOffProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19 10C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V12C3 10.8954 3.89543 10 5 10H7V6.5C7 3.73858 9.23858 1.5 12 1.5C14.7614 1.5 17 3.73858 17 6.5V7H15V6.5C15 4.84315 13.6569 3.5 12 3.5C10.3431 3.5 9 4.84315 9 6.5V10H19ZM5 20H19V12H5V20Z" fill={color}/>
    </svg>
  );
};

export default LockOff;
