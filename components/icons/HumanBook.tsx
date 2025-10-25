import React from 'react';

export interface HumanBookProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HumanBook: React.FC<HumanBookProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 12.5C15.0939 12.5 18 14.5419 18 17.5C18 18.0523 17.5523 18.5 17 18.5H7C6.44772 18.5 6 18.0523 6 17.5C6 14.5419 8.90606 12.5 12 12.5ZM12 14.5C10.1297 14.5 8.76859 15.4134 8.24121 16.5H15.7588C15.2314 15.4134 13.8703 14.5 12 14.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 5.5C13.6569 5.5 15 6.84315 15 8.5C15 10.1569 13.6569 11.5 12 11.5C10.3431 11.5 9 10.1569 9 8.5C9 6.84315 10.3431 5.5 12 5.5ZM12 7.5C11.4477 7.5 11 7.94772 11 8.5C11 9.05228 11.4477 9.5 12 9.5C12.5523 9.5 13 9.05228 13 8.5C13 7.94772 12.5523 7.5 12 7.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.5 2C21.0523 2 21.5 2.44772 21.5 3V21C21.5 21.2652 21.3946 21.5195 21.207 21.707C21.0195 21.8946 20.7652 22 20.5 22H3.5C2.94772 22 2.5 21.5523 2.5 21V20H1V18H2.5V6H1V4H2.5V3C2.5 2.73478 2.60543 2.48051 2.79297 2.29297C2.98051 2.10543 3.23478 2 3.5 2H20.5ZM4.5 20H19.5V4H4.5V20Z" fill={color}/>
    </svg>
  );
};

export default HumanBook;
