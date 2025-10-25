import React from 'react';

export interface SpeakerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Speaker: React.FC<SpeakerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 11.5C13.6569 11.5 15 12.8431 15 14.5C15 16.1569 13.6569 17.5 12 17.5C10.3431 17.5 9 16.1569 9 14.5C9 12.8431 10.3431 11.5 12 11.5ZM12 13.5C11.4477 13.5 11 13.9477 11 14.5C11 15.0523 11.4477 15.5 12 15.5C12.5523 15.5 13 15.0523 13 14.5C13 13.9477 12.5523 13.5 12 13.5Z" fill={color}/>
  <path d="M12 6.5C12.8284 6.5 13.5 7.17157 13.5 8C13.5 8.82843 12.8284 9.5 12 9.5C11.1716 9.5 10.5 8.82843 10.5 8C10.5 7.17157 11.1716 6.5 12 6.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18 2.5C18.5523 2.5 19 2.94772 19 3.5V20.5C19 21.0523 18.5523 21.5 18 21.5H6C5.44772 21.5 5 21.0523 5 20.5V3.5C5 3.23478 5.10543 2.98051 5.29297 2.79297C5.48051 2.60543 5.73478 2.5 6 2.5H18ZM7 19.5H17V4.5H7V19.5Z" fill={color}/>
    </svg>
  );
};

export default Speaker;
