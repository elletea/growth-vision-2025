import React from 'react';

export interface IndicatorDefaultProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorDefault: React.FC<IndicatorDefaultProps> = ({
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
      
    </svg>
  );
};

export default IndicatorDefault;
