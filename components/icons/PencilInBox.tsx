import React from 'react';

export interface PencilInBoxProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PencilInBox: React.FC<PencilInBoxProps> = ({
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
      <path d="M11.5791 5.50011H5.5V18.5001H18.5V13.6075H20.5V19.5001C20.5 20.0524 20.0523 20.5001 19.5 20.5001H4.5C3.94772 20.5001 3.5 20.0524 3.5 19.5001V4.50011C3.50003 3.94785 3.94773 3.50011 4.5 3.50011H11.5791V5.50011Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.5693 2.05382C18.9615 1.73563 19.5387 1.7583 19.9043 2.12218L22.5215 4.72765C22.7094 4.91479 22.8159 5.16948 22.8164 5.43468C22.8167 5.69963 22.7114 5.95399 22.5244 6.14171L16.7012 11.9845C16.359 12.3277 15.9389 12.5833 15.4766 12.7286L12.1162 13.7853C11.7617 13.8967 11.3738 13.8022 11.1104 13.5401C10.8472 13.2781 10.751 12.8911 10.8604 12.5362L11.8975 9.18077C12.0423 8.71233 12.3 8.28644 12.6475 7.94054L18.4932 2.12218L18.5693 2.05382ZM14.0586 9.35851C13.9428 9.47378 13.8568 9.61551 13.8086 9.77159L13.334 11.3048L14.877 10.8204C15.0309 10.7719 15.1712 10.6867 15.2852 10.5724L20.4014 5.43858L19.1982 4.24229L14.0586 9.35851Z" fill={color}/>
    </svg>
  );
};

export default PencilInBox;
