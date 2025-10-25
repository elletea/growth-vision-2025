import React from 'react';

export interface ServiceBellProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceBell: React.FC<ServiceBellProps> = ({
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
      <path d="M22 20.5H2V18.5H22V20.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.5H13V6.04395C17.9966 6.49404 21.5 10.3165 21.5 15.5C21.5 16.0523 21.0523 16.5 20.5 16.5H3.5C2.94772 16.5 2.5 16.0523 2.5 15.5C2.5 10.3165 6.00338 6.49404 11 6.04395V4.5H9.5V2.5H14.5V4.5ZM12 8C7.9234 8 4.98678 10.6238 4.55664 14.5H19.4434C19.0132 10.6238 16.0766 8 12 8Z" fill={color}/>
    </svg>
  );
};

export default ServiceBell;
