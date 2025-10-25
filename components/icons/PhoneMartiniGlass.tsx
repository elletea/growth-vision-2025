import React from 'react';

export interface PhoneMartiniGlassProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneMartiniGlass: React.FC<PhoneMartiniGlassProps> = ({
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
      <path d="M9 4H6.5V20H17.5V16H19.5V20C19.5 21.1046 18.6046 22 17.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20V4C4.5 2.89543 5.39543 2 6.5 2H9V4Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M23 2C23.4125 2 23.7832 2.25315 23.9326 2.6377C24.082 3.02221 23.9791 3.45881 23.6748 3.7373L18.5 8.47266V12H20.833V14H14.167V12H16.5V8.47266L11.3252 3.7373C11.0209 3.45881 10.918 3.02221 11.0674 2.6377C11.2168 2.25315 11.5875 2 12 2H23ZM17.5 6.67676L20.4268 4H14.5732L17.5 6.67676Z" fill={color}/>
    </svg>
  );
};

export default PhoneMartiniGlass;
