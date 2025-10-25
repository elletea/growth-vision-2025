import React from 'react';

export interface EmotionSadProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EmotionSad: React.FC<EmotionSadProps> = ({
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
      <path d="M12 13C13.8619 13 15.491 14.0025 16.3633 15.4951L14.6367 16.5049C14.1117 15.6065 13.1291 15 12 15C10.8709 15 9.88826 15.6065 9.36328 16.5049L7.63672 15.4951C8.50905 14.0025 10.1381 13 12 13Z" fill={color}/>
  <path d="M9.5 8.5C10.3284 8.5 11 9.17157 11 10C11 10.8284 10.3284 11.5 9.5 11.5C8.67157 11.5 8 10.8284 8 10C8 9.17157 8.67157 8.5 9.5 8.5Z" fill={color}/>
  <path d="M14.5 8.5C15.3284 8.5 16 9.17157 16 10C16 10.8284 15.3284 11.5 14.5 11.5C13.6716 11.5 13 10.8284 13 10C13 9.17157 13.6716 8.5 14.5 8.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill={color}/>
    </svg>
  );
};

export default EmotionSad;
