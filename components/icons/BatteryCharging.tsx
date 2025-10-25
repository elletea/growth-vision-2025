import React from 'react';

export interface BatteryChargingProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BatteryCharging: React.FC<BatteryChargingProps> = ({
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
      <path d="M11.251 4.72272C11.39 4.51442 11.6618 4.44082 11.8867 4.55085C12.1115 4.66098 12.2198 4.92073 12.1406 5.15827L10.6113 9.74616L14.2236 11.5528C14.3519 11.6169 14.4466 11.7335 14.4834 11.8721C14.52 12.0106 14.4955 12.1582 14.416 12.2774L9.74902 19.2774C9.61004 19.4857 9.33824 19.5593 9.11328 19.4493C8.88845 19.3392 8.7802 19.0794 8.85938 18.8419L10.3877 14.253L6.77637 12.4473C6.6481 12.3832 6.55341 12.2666 6.5166 12.128C6.47995 11.9895 6.50451 11.8419 6.58398 11.7227L11.251 4.72272Z" fill={color}/>
  <path d="M8 7.00007H4C3.44772 7.00007 3 7.44778 3 8.00007V16.0001L3.00488 16.1026C3.05622 16.6067 3.48233 17.0001 4 17.0001H7V19.0001H4C2.3949 19.0001 1.08422 17.7395 1.00391 16.1544L1 16.0001V8.00007C1 6.34321 2.34315 5.00007 4 5.00007H8V7.00007Z" fill={color}/>
  <path d="M17 5.00007C18.6569 5.00007 20 6.34321 20 8.00007V16.0001C20 17.6569 18.6569 19.0001 17 19.0001H13V17.0001H17C17.5523 17.0001 18 16.5523 18 16.0001V8.00007C18 7.44778 17.5523 7.00007 17 7.00007H14V5.00007H17Z" fill={color}/>
  <path d="M23.5 14.5001H21.5V9.50007H23.5V14.5001Z" fill={color}/>
    </svg>
  );
};

export default BatteryCharging;
