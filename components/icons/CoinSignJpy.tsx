import React from 'react';

export interface CoinSignJpyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CoinSignJpy: React.FC<CoinSignJpyProps> = ({
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
      <path d="M16.459 7.29004L13.7314 11.1094H15.7471V12.8594H12.9062V14.082H15.7471V15.832H12.9062V17.9307H11.1562V15.832H8.31445V14.082H11.1562V12.8594H8.31445V11.1094H10.3301L7.60254 7.29004L9.02637 6.27246L12.0303 10.4775L15.0352 6.27246L16.459 7.29004Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={color}/>
    </svg>
  );
};

export default CoinSignJpy;
