import React from 'react';

export interface XProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const X: React.FC<XProps> = ({
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
      <path d="M19.7069 5.70691L13.4139 11.9999L19.7069 18.2928L18.2928 19.7069L11.9999 13.4139L5.70691 19.7069L4.29285 18.2928L10.5858 11.9999L4.29285 5.70691L5.70691 4.29285L11.9999 10.5858L18.2928 4.29285L19.7069 5.70691Z" fill={color}/>
    </svg>
  );
};

export default X;
