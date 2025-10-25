import React from 'react';

export interface ZelleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Zelle: React.FC<ZelleProps> = ({
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
      <path d="M17.1275 17.9246C17.3538 18.1642 17.3405 18.4305 17.3005 18.537H13.1733V21H10.7369V18.537H6.67627V16.3935L13.2399 7.9926H6.92923V5.46302L10.7369 5.50296V3H13.1733V5.48964H17.0343V7.5L10.4573 15.9541C10.4573 15.9808 15.1437 15.9808 15.9559 16.0074C15.9958 16.034 16.089 16.3136 16.2088 16.5533C16.4751 17.0991 16.768 17.5251 17.1275 17.9246Z" fill={color}/>
    </svg>
  );
};

export default Zelle;
