import React from 'react';

export interface StethoscopeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Stethoscope: React.FC<StethoscopeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5 7C5 8.933 6.567 10.5 8.5 10.5C10.433 10.5 12 8.933 12 7V3H14V7C14 9.69594 12.0599 11.9368 9.5 12.4072V15.5C9.50001 17.7091 11.2909 19.5 13.5 19.5C15.4254 19.4999 17.032 18.1392 17.4131 16.3271C16.0123 15.8699 15 14.5535 15 13C15 11.067 16.567 9.5 18.5 9.5C20.4329 9.50006 22 11.067 22 13C22 14.6088 20.9141 15.9627 19.4355 16.3721C19.0131 19.2723 16.5174 21.4999 13.5 21.5C10.1863 21.5 7.50001 18.8137 7.5 15.5V12.4072C4.94007 11.9368 3 9.69594 3 7V3H5V7ZM18.5 11.5C17.6716 11.5 17 12.1716 17 13C17 13.8284 17.6716 14.5 18.5 14.5C19.3284 14.4999 20 13.8284 20 13C20 12.1716 19.3284 11.5001 18.5 11.5Z" fill={color}/>
    </svg>
  );
};

export default Stethoscope;
