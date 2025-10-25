import React from 'react';

export interface WifiEmptySlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WifiEmptySlash: React.FC<WifiEmptySlashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M22.6862 3.72656L19.6979 6.54785C20.8024 7.3405 21.8384 8.31532 22.7761 9.46973C23.0884 9.8547 23.0722 10.411 22.737 10.7764L12.737 21.6758C12.5476 21.882 12.2797 22 11.9997 22C11.7197 21.9999 11.4517 21.882 11.2624 21.6758L7.74286 17.8389L4.68622 20.7266L3.31317 19.2734L6.39032 16.3662L1.26239 10.7764C0.927395 10.411 0.91107 9.85464 1.22333 9.46973C4.15676 5.85794 8.05218 4.0001 11.9997 4C14.0326 4.00002 16.0514 4.49366 17.9323 5.46484L21.3132 2.27344L22.6862 3.72656ZM9.19696 16.4658L11.9997 19.5205L20.6608 10.0781C19.8947 9.23714 19.0719 8.52928 18.2116 7.95117L9.19696 16.4658ZM11.9997 6C8.94193 6.0001 5.83893 7.33206 3.33759 10.0781L7.8454 14.9922L16.3747 6.93652C14.954 6.30985 13.4718 6.00002 11.9997 6Z" fill={color}/>
    </svg>
  );
};

export default WifiEmptySlash;
