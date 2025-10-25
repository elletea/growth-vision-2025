import React from 'react';

export interface InboxProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Inbox: React.FC<InboxProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 19H19V14H15.8945C15.4881 15.7199 13.9437 17 12.0996 17H11.9004C10.0563 17 8.51186 15.7199 8.10547 14H5V19ZM5 12H9C9.55228 12 10 12.4477 10 13V13.0996C10 14.149 10.851 15 11.9004 15H12.0996C13.149 15 14 14.149 14 13.0996V13C14 12.4477 14.4477 12 15 12H19V5H5V12Z" fill={color}/>
    </svg>
  );
};

export default Inbox;
