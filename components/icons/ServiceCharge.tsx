import React from 'react';

export interface ServiceChargeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCharge: React.FC<ServiceChargeProps> = ({
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
      <path d="M11 5.5H5.5V18.5H18.5V14H20.5V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H4.5C3.94774 20.5 3.50003 20.0523 3.5 19.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H11V5.5Z" fill={color}/>
  <path d="M18.8301 5.30078L21.8447 3.62598L22.8154 5.37402L19.8887 7L22.8154 8.62598L21.8447 10.374L18.8301 8.69922V12H16.8301V8.69922L13.8154 10.374L12.8447 8.62598L15.7715 7L12.8447 5.37402L13.8154 3.62598L16.8301 5.30078V2H18.8301V5.30078Z" fill={color}/>
    </svg>
  );
};

export default ServiceCharge;
