import React from 'react';

export interface TrophyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Trophy: React.FC<TrophyProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18 1.5C18.2775 1.5 18.5423 1.61539 18.7314 1.81836C18.9206 2.02152 19.0168 2.2944 18.9971 2.57129L18.7881 5.5H21C21.5523 5.5 22 5.94772 22 6.5V9C22 11.3129 20.2549 13.2165 18.0098 13.4697C17.2603 15.6284 15.3229 17.2098 13 17.4629V20.5H16V22.5H8V20.5H11V17.4629C8.67703 17.2098 6.7387 15.6285 5.98926 13.4697C3.74454 13.216 2 11.3125 2 9V6.5C2 5.94772 2.44772 5.5 3 5.5H5.21191L5.00293 2.57129C4.98315 2.2944 5.07939 2.02152 5.26855 1.81836C5.4577 1.61539 5.72255 1.5 6 1.5H18ZM7.66602 11.7852C7.81561 13.8782 9.55692 15.4998 11.6553 15.5H12.3447C14.4431 15.4998 16.1844 13.8782 16.334 11.7852L16.9268 3.5H7.07324L7.66602 11.7852ZM4 9C4 10.074 4.67824 10.9869 5.62891 11.3408L5.35449 7.5H4V9ZM18.3701 11.3408C19.3212 10.9871 20 10.0743 20 9V7.5H18.6455L18.3701 11.3408Z" fill={color}/>
    </svg>
  );
};

export default Trophy;
