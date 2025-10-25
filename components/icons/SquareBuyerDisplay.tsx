import React from 'react';

export interface SquareBuyerDisplayProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareBuyerDisplay: React.FC<SquareBuyerDisplayProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19.446 4.5C21.0716 4.5 22.2648 6.02712 21.8717 7.60449L20.4655 13.2402L20.4704 13.2422L19.902 15.5146C19.5865 16.7769 20.5414 17.9999 21.8425 18H22.9997V20H21.8425C21.7267 20 21.6125 19.9929 21.4997 19.9834V20H3.4196C1.79421 19.9997 0.600863 18.4727 0.993821 16.8955L3.61199 6.39551C3.88963 5.28196 4.89015 4.50015 6.03777 4.5H19.446ZM6.03777 6.5C5.80838 6.50015 5.60795 6.65631 5.55241 6.87891L2.93425 17.3789C2.85567 17.6942 3.09471 17.9997 3.4196 18H16.8278C17.0573 18 17.2576 17.8437 17.3132 17.6211L19.9313 7.12109C20.01 6.8056 19.7711 6.5 19.446 6.5H6.03777Z" fill={color}/>
    </svg>
  );
};

export default SquareBuyerDisplay;
