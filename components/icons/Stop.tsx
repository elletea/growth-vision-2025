import React from 'react';

export interface StopProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Stop: React.FC<StopProps> = ({
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
      <path d="M5.5 5.7C5.5 5.58954 5.58954 5.5 5.7 5.5H18.3C18.4105 5.5 18.5 5.58954 18.5 5.7V18.3C18.5 18.4105 18.4105 18.5 18.3 18.5H5.7C5.58954 18.5 5.5 18.4105 5.5 18.3V5.7Z" fill={color}/>
    </svg>
  );
};

export default Stop;
