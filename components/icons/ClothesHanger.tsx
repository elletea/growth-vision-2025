import React from 'react';

export interface ClothesHangerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ClothesHanger: React.FC<ClothesHangerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C13.933 2 15.5 3.567 15.5 5.5V5.55371C15.5 6.80209 14.8449 7.95928 13.7744 8.60156L13 9.06543V9.94238L22.2656 15.6787C23.0329 16.1537 23.5 16.9922 23.5 17.8945C23.4999 19.3335 22.3335 20.4999 20.8945 20.5H3.10547C1.66654 20.4999 0.500067 19.3335 0.5 17.8945C0.5 16.9922 0.967127 16.1537 1.73438 15.6787L11 9.94238V8.5C11 8.14879 11.1842 7.82332 11.4854 7.64258L12.7451 6.88672C13.2132 6.60588 13.5 6.09956 13.5 5.55371V5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5V6H8.5V5.5C8.5 3.567 10.067 2 12 2ZM2.78711 17.3799C2.60879 17.4903 2.5 17.6848 2.5 17.8945C2.50007 18.2289 2.77111 18.4999 3.10547 18.5H20.8945C21.2289 18.4999 21.4999 18.2289 21.5 17.8945C21.5 17.6848 21.3912 17.4903 21.2129 17.3799L12 11.6758L2.78711 17.3799Z" fill={color}/>
    </svg>
  );
};

export default ClothesHanger;
