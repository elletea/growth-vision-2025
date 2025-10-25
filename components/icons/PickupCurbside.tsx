import React from 'react';

export interface PickupCurbsideProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PickupCurbside: React.FC<PickupCurbsideProps> = ({
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
      <path d="M7.07336 3.5C8.02003 3.50016 8.88525 4.03516 9.30872 4.88184L11.5577 9.37891C11.9482 9.27534 12.3278 9.16551 12.6945 9.04785L13.3058 10.9521C12.8838 11.0876 12.4477 11.2127 12.0001 11.3301V20C12.0001 20.5522 11.5524 20.9999 11.0001 21H7.00012C6.44784 21 6.00012 20.5523 6.00012 20V18H2.00012V16H7.00012C7.55235 16.0001 8.00012 16.4478 8.00012 17V19H10.0001V11.7822C7.49541 12.263 4.73917 12.5 2.00012 12.5V10.5C4.61559 10.5 7.21378 10.2731 9.547 9.83105L7.52063 5.77637C7.436 5.6071 7.26259 5.50016 7.07336 5.5H2.00012V3.5H7.07336Z" fill={color}/>
  <path d="M22.0001 21H14.0001V19H22.0001V21Z" fill={color}/>
    </svg>
  );
};

export default PickupCurbside;
