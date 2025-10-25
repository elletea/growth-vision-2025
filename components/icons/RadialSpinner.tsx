import React from 'react';

export interface RadialSpinnerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RadialSpinner: React.FC<RadialSpinnerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19 12C19 8.13401 15.866 5 12 5V3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12H5C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12Z" fill={color}/>
    </svg>
  );
};

export default RadialSpinner;
