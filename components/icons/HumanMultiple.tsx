import React from 'react';

export interface HumanMultipleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanMultiple: React.FC<HumanMultipleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 15.5C13.8195 15.5 15.536 15.9757 16.8262 16.9023C18.1366 17.8436 19 19.2545 19 21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21C5 19.2545 5.86339 17.8436 7.17383 16.9023C8.46398 15.9757 10.1805 15.5 12 15.5ZM12 17.5C10.5059 17.5 9.22223 17.8934 8.34082 18.5264C7.78139 18.9282 7.38432 19.424 7.17383 20H16.8262C16.6157 19.424 16.2186 18.9282 15.6592 18.5264C14.7778 17.8934 13.4941 17.5 12 17.5Z" fill={color}/>
  <path d="M7 10.5C5.12966 10.5 3.76859 11.4134 3.24121 12.5H7V14.5H2C1.44772 14.5 1 14.0523 1 13.5C1 10.5419 3.90606 8.5 7 8.5V10.5Z" fill={color}/>
  <path d="M17 8.5C20.0939 8.5 23 10.5419 23 13.5C23 14.0523 22.5523 14.5 22 14.5H17V12.5H20.7588C20.2314 11.4134 18.8703 10.5 17 10.5V8.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8ZM12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M7 1C8.65685 1 10 2.34315 10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1ZM7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5C7.55228 5 8 4.55228 8 4C8 3.44772 7.55228 3 7 3Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 1C18.6569 1 20 2.34315 20 4C20 5.65685 18.6569 7 17 7C15.3431 7 14 5.65685 14 4C14 2.34315 15.3431 1 17 1ZM17 3C16.4477 3 16 3.44772 16 4C16 4.55228 16.4477 5 17 5C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3Z" fill={color}/>
    </svg>
  );
};

export default HumanMultiple;
