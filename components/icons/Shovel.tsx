import React from 'react';

export interface ShovelProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Shovel: React.FC<ShovelProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.20703 3.20703L6.41406 5L11.5 10.0859L14.293 7.29297L14.3662 7.22656C14.5441 7.08075 14.7679 7.00002 15 7C15.2652 7 15.5195 7.10549 15.707 7.29297L20.252 11.8369C21.3937 12.9787 21.9139 14.6025 21.6484 16.1953L20.9863 20.1641C20.9161 20.5855 20.5855 20.9161 20.1641 20.9863L16.1953 21.6484C14.6025 21.9139 12.9787 21.3937 11.8369 20.252L7.29297 15.707C6.90254 15.3165 6.90247 14.6835 7.29297 14.293L10.0859 11.5L5 6.41406L3.20703 8.20703L1.79297 6.79297L6.79297 1.79297L8.20703 3.20703ZM9.41406 14.999L13.252 18.8369C13.937 19.522 14.9106 19.8341 15.8662 19.6748L19.1309 19.1309L19.6748 15.8662C19.8341 14.9106 19.522 13.937 18.8369 13.252L14.999 9.41406L9.41406 14.999Z" fill={color}/>
    </svg>
  );
};

export default Shovel;
