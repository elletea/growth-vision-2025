import React from 'react';

export interface WifiExclamationProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WifiExclamation: React.FC<WifiExclamationProps> = ({
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
      <path d="M13.4999 18.5C13.4999 19.3284 12.8283 20 11.9999 20C11.1715 20 10.4999 19.3284 10.4999 18.5C10.4999 17.6716 11.1715 17 11.9999 17C12.8283 17 13.4999 17.6716 13.4999 18.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11 4.5H13V15H11V4.5Z" fill={color}/>
  <path d="M8.99121 16.4917L7.75977 15.2602C8.13232 14.8844 8.54644 14.5653 8.99121 14.3061V16.4917Z" fill={color}/>
  <path d="M15.001 14.3061C15.4486 14.5661 15.8656 14.8856 16.2402 15.2602L15.0088 16.4917L15.001 14.3061Z" fill={color}/>
  <path d="M8.99805 12.0796C8.03021 12.4696 7.12346 13.0567 6.33984 13.8403L4.92969 12.4301C6.10795 11.2519 7.50921 10.4297 8.99805 9.96335V12.0796Z" fill={color}/>
  <path d="M14.998 9.96335C16.4856 10.4297 17.8844 11.2519 19.0596 12.4301L17.6494 13.8403C16.8658 13.0567 15.959 12.4696 14.9912 12.0796L14.998 9.96335Z" fill={color}/>
  <path d="M8.99023 7.87839C6.93481 8.4063 5.05161 9.47518 3.50977 11.0102L2.09961 9.60007C4.01669 7.683 6.39781 6.38811 8.99023 5.82272V7.87839Z" fill={color}/>
  <path d="M15.0088 5.82272C17.6012 6.38808 19.9823 7.683 21.8994 9.60007L20.4893 11.0102C18.9474 9.47518 17.0642 8.40628 15.0088 7.87839V5.82272Z" fill={color}/>
    </svg>
  );
};

export default WifiExclamation;
