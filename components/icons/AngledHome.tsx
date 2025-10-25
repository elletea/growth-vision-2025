import React from 'react';

export interface AngledHomeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AngledHome: React.FC<AngledHomeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.39746 4.2015C7.64787 4.01263 7.97281 3.95237 8.27441 4.03842L22.2744 8.03842C22.7037 8.16111 23 8.55389 23 9.00033V20.0003C22.9998 20.5178 22.6065 20.9431 22.1025 20.9945C22.0688 20.9979 22.0346 21.0003 22 21.0003H2C1.44785 21.0003 1.00022 20.5524 1 20.0003V14.0003C1 13.6661 1.16723 13.3538 1.44531 13.1683L7 9.46517V5.00033C7 4.68662 7.14707 4.39047 7.39746 4.2015ZM9 19.0003H21V9.75424L9 6.32552V19.0003ZM3 14.5355V19.0003H7V11.8685L3 14.5355Z" fill={color}/>
    </svg>
  );
};

export default AngledHome;
