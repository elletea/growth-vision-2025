import React from 'react';

export interface IndicatorLoadingProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorLoading: React.FC<IndicatorLoadingProps> = ({
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
      <path d="M12.0001 0C18.6275 0 24.0001 5.3726 24.0001 12C24.0001 18.6274 18.6275 24 12.0001 24C5.37271 24 0.00012207 18.6274 0.00012207 12H2.00012C2.00012 17.5228 6.47728 22 12.0001 22C17.523 22 22.0001 17.5228 22.0001 12C22.0001 6.47717 17.523 2 12.0001 2V0Z" fill={color}/>
    </svg>
  );
};

export default IndicatorLoading;
