import React from 'react';

export interface PhoneMessageProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneMessage: React.FC<PhoneMessageProps> = ({
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
      <path d="M7.5 5H5.5V20.5H16.5V16H18.5V20.5C18.5 21.6046 17.6046 22.5 16.5 22.5H5.5C4.39543 22.5 3.5 21.6046 3.5 20.5V5C3.5 3.89543 4.39543 3 5.5 3H7.5V5Z" fill={color}/>
  <path d="M20 2C21.933 2.00003 23.5 3.56702 23.5 5.5V8C23.5 9.93298 21.933 11.5 20 11.5H18.5V9.5H20C20.8284 9.49997 21.5 8.82841 21.5 8V5.5C21.5 4.67159 20.8284 4.00003 20 4H13C12.1716 4 11.5 4.67157 11.5 5.5V8C11.5 8.82843 12.1716 9.5 13 9.5H14.0859C14.6163 9.50006 15.125 9.71091 15.5 10.0859L18.207 12.793L16.793 14.207L14.0859 11.5H13C11.067 11.5 9.5 9.933 9.5 8V5.5C9.5 3.567 11.067 2 13 2H20Z" fill={color}/>
    </svg>
  );
};

export default PhoneMessage;
