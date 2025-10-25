import React from 'react';

export interface XCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const XCircle: React.FC<XCircleProps> = ({
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
      <path d="M16.7073 8.70724L13.4143 12.0002L16.7073 15.2932L15.2932 16.7072L12.0002 13.4143L8.70725 16.7072L7.29319 15.2932L10.5862 12.0002L7.29319 8.70724L8.70725 7.29317L12.0002 10.5861L15.2932 7.29317L16.7073 8.70724Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92893 4.92892C8.83417 1.02367 15.1663 1.02367 19.0715 4.92892C22.9768 8.83416 22.9768 15.1663 19.0715 19.0715C15.1663 22.9767 8.83418 22.9767 4.92893 19.0715C1.02369 15.1663 1.02369 8.83416 4.92893 4.92892ZM17.6574 6.34298C14.5333 3.21878 9.46719 3.21879 6.34299 6.34298C3.2188 9.46717 3.2188 14.5332 6.34299 17.6574C9.46719 20.7816 14.5333 20.7816 17.6574 17.6574C20.7816 14.5332 20.7816 9.46717 17.6574 6.34298Z" fill={color}/>
    </svg>
  );
};

export default XCircle;
