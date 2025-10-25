import React from 'react';

export interface DesktopProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Desktop: React.FC<DesktopProps> = ({
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
      <path d="M15.4707 21H8.5293V19H15.4707V21Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4C20.6046 4 21.5 4.89543 21.5 6V15C21.5 16.1046 20.6046 17 19.5 17H4.5C3.39543 17 2.5 16.1046 2.5 15V6C2.5 4.89543 3.39543 4 4.5 4H19.5ZM4.5 15H19.5V6H4.5V15Z" fill={color}/>
    </svg>
  );
};

export default Desktop;
