import React from 'react';

export interface EmptyFrameProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EmptyFrame: React.FC<EmptyFrameProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.00006 2C2.89549 2 2.00006 2.89543 2.00006 4V7H4.00006V4L7.00006 4V2H4.00006ZM9.00006 2V4H12.0001V7H14.0001V4C14.0001 2.89543 13.1046 2 12.0001 2H9.00006ZM14.0001 9H12.0001V12H9.00006V14H12.0001C13.1046 14 14.0001 13.1046 14.0001 12V9ZM7.00006 14V12H4.00006V9H2.00006V12C2.00006 13.1046 2.89549 14 4.00006 14H7.00006Z" fill={color}/>
    </svg>
  );
};

export default EmptyFrame;
