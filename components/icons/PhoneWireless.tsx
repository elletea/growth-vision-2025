import React from 'react';

export interface PhoneWirelessProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneWireless: React.FC<PhoneWirelessProps> = ({
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
      <path d="M12 4.5H6.5V20H17.5V10H19.5V20C19.5 21.1046 18.6046 22 17.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20V4.5C4.5 3.39543 5.39543 2.5 6.5 2.5H12V4.5Z" fill={color}/>
  <path d="M14 4C16.2091 4 18 5.79086 18 8H16C16 6.89543 15.1046 6 14 6V4Z" fill={color}/>
  <path d="M14 0C18.4183 0 22 3.58172 22 8H20C20 4.68629 17.3137 2 14 2V0Z" fill={color}/>
    </svg>
  );
};

export default PhoneWireless;
