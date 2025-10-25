import React from 'react';

export interface SprayBottleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SprayBottle: React.FC<SprayBottleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 2.00024C17.5523 2.00024 18 2.44796 18 3.00024V8.00024C18 9.6336 18.3542 10.4652 18.7402 10.8899C19.1059 11.292 19.6579 11.5002 20.5 11.5002V13.5002C19.3422 13.5002 18.1441 13.2083 17.2598 12.2356C16.5575 11.463 16.1645 10.3808 16.042 9.00024H14.5254C14.5917 10.4136 14.8086 11.454 15.2266 12.3118C15.7283 13.3411 16.5696 14.2172 18.0391 15.1575C18.355 15.3596 18.5308 15.7226 18.4951 16.0959L18.0176 21.0959C17.9682 21.6087 17.5367 22.0002 17.0215 22.0002H6.5C5.9478 22.0002 5.50013 21.5524 5.5 21.0002C5.5 15.7711 5.48411 12.584 7.53418 9.00024H5C4.44778 9.00024 4.0001 8.55244 4 8.00024C4 4.68654 6.68629 2.00024 10 2.00024H17ZM9.89258 9.00024C7.66114 12.2938 7.51281 14.8864 7.50293 20.0002H16.1133L16.4473 16.4993C15.0627 15.5378 14.0688 14.5018 13.4287 13.1887C12.9131 12.1308 12.6578 10.9513 12.5566 9.59302L12.5225 9.00024H9.89258ZM10 4.00024C8.13616 4.00024 6.57002 5.27501 6.12598 7.00024H16V4.00024H10Z" fill={color}/>
    </svg>
  );
};

export default SprayBottle;
