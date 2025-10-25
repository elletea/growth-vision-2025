import React from 'react';

export interface KeyboardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Keyboard: React.FC<KeyboardProps> = ({
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
      <path d="M14 15H5V13H14V15Z" fill={color}/>
  <path d="M19 15H16V13H19V15Z" fill={color}/>
  <path d="M6.31738 8.75C7.00756 8.75021 7.56738 9.30978 7.56738 10C7.56738 10.6902 7.00756 11.2498 6.31738 11.25C5.62703 11.25 5.06738 10.6904 5.06738 10C5.06738 9.30964 5.62703 8.75 6.31738 8.75Z" fill={color}/>
  <path d="M10.25 8.75C10.9404 8.75 11.5 9.30964 11.5 10C11.5 10.6904 10.9404 11.25 10.25 11.25C9.55964 11.25 9 10.6904 9 10C9 9.30964 9.55964 8.75 10.25 8.75Z" fill={color}/>
  <path d="M14 8.75C14.6904 8.75 15.25 9.30964 15.25 10C15.25 10.6904 14.6904 11.25 14 11.25C13.3096 11.25 12.75 10.6904 12.75 10C12.75 9.30964 13.3096 8.75 14 8.75Z" fill={color}/>
  <path d="M17.75 8.71094C18.4402 8.71094 18.9998 9.27076 19 9.96094C19 10.6513 18.4404 11.2109 17.75 11.2109C17.0596 11.2109 16.5 10.6513 16.5 9.96094C16.5002 9.27076 17.0598 8.71094 17.75 8.71094Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 5C22.1046 5 23 5.89543 23 7V17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H21ZM3 17H21V7H3V17Z" fill={color}/>
    </svg>
  );
};

export default Keyboard;
