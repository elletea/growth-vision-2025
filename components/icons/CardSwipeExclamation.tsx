import React from 'react';

export interface CardSwipeExclamationProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardSwipeExclamation: React.FC<CardSwipeExclamationProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 13C19.7614 13 22 15.2386 22 18C22 20.7614 19.7614 23 17 23C14.2386 23 12 20.7614 12 18C12 15.2386 14.2386 13 17 13ZM17 19.5C16.448 19.5 16 19.948 16 20.5C16 21.052 16.448 21.5 17 21.5C17.552 21.5 18 21.052 18 20.5C18 19.948 17.552 19.5 17 19.5ZM16.25 18H17.75V15H16.25V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19.5 4C21.1569 4 22.5 5.34315 22.5 7V12H20.5V10.5H3.5V17C3.5 17.5523 3.94772 18 4.5 18H10V20H4.5C2.84315 20 1.5 18.6569 1.5 17V7C1.5 5.34315 2.84315 4 4.5 4H19.5ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V8.5H20.5V7C20.5 6.44772 20.0523 6 19.5 6H4.5Z" fill={color}/>
    </svg>
  );
};

export default CardSwipeExclamation;
