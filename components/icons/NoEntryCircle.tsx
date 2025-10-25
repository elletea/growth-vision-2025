import React from 'react';

export interface NoEntryCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NoEntryCircle: React.FC<NoEntryCircleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4.92893 4.92892C8.83417 1.02367 15.1663 1.02367 19.0715 4.92892C22.9768 8.83416 22.9768 15.1663 19.0715 19.0715C15.1663 22.9767 8.83418 22.9767 4.92893 19.0715C1.02369 15.1663 1.02369 8.83416 4.92893 4.92892ZM7.09592 18.3176C10.2344 20.7603 14.7726 20.5423 17.6574 17.6574C20.5423 14.7726 20.7604 10.2344 18.3176 7.09591L7.09592 18.3176ZM16.9035 5.68185C13.7651 3.23998 9.22748 3.45849 6.34299 6.34298C3.45851 9.22747 3.24 13.7651 5.68186 16.9035L16.9035 5.68185Z" fill={color}/>
    </svg>
  );
};

export default NoEntryCircle;
