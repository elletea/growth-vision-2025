import React from 'react';

export interface OfficePowerpointProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const OfficePowerpoint: React.FC<OfficePowerpointProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.5 3.5C21.0523 3.5 21.5 3.94772 21.5 4.5V19.5C21.5 20.0523 21.0523 20.5 20.5 20.5H3.5C2.94772 20.5 2.5 20.0523 2.5 19.5V4.5C2.5 3.94772 2.94772 3.5 3.5 3.5H20.5ZM4.5 18.5H19.5V5.5H4.5V18.5Z" fill={color}/>
  <path d="M10.58 13.2156V16.2156H8.576V7.59961H12.212C14.24 7.59961 15.5 8.55961 15.5 10.4076C15.5 12.2436 14.24 13.2156 12.212 13.2156H10.58ZM10.58 11.5356H12.104C13.052 11.5356 13.532 11.1156 13.532 10.4076C13.532 9.69961 13.052 9.29161 12.104 9.29161H10.58V11.5356Z" fill={color}/>
    </svg>
  );
};

export default OfficePowerpoint;
