import React from 'react';

export interface FourPointedStarProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FourPointedStar: React.FC<FourPointedStarProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1C12.4277 1 12.808 1.27202 12.9463 1.67676L15.333 8.66602L22.3232 11.0537C22.728 11.192 23 11.5723 23 12C23 12.4277 22.728 12.808 22.3232 12.9463L15.333 15.333L12.9463 22.3232C12.808 22.728 12.4277 23 12 23C11.5723 23 11.192 22.728 11.0537 22.3232L8.66602 15.333L1.67676 12.9463C1.27202 12.808 1 12.4277 1 12C1 11.5723 1.27202 11.192 1.67676 11.0537L8.66602 8.66602L11.0537 1.67676L11.1162 1.53125C11.2875 1.20807 11.6258 1 12 1ZM10.4004 9.77734C10.3003 10.0703 10.0703 10.3003 9.77734 10.4004L5.09375 12L9.77734 13.5996L9.88477 13.6426C10.1263 13.7577 10.3129 13.9664 10.4004 14.2227L12 18.9053L13.5996 14.2227L13.6426 14.1152C13.7577 13.8737 13.9664 13.6871 14.2227 13.5996L18.9053 12L14.2227 10.4004C13.9297 10.3003 13.6997 10.0703 13.5996 9.77734L12 5.09375L10.4004 9.77734Z" fill={color}/>
    </svg>
  );
};

export default FourPointedStar;
