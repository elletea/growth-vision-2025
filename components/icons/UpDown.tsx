import React from 'react';

export interface UpDownProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UpDown: React.FC<UpDownProps> = ({
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
      <path d="M18.4999 4.5V16.5859L21.2928 13.793L22.7069 15.207L18.2069 19.707C18.0194 19.8946 17.7651 20 17.4999 20C17.2678 20 17.044 19.9193 16.8661 19.7734L16.7928 19.707L12.2928 15.207L13.7069 13.793L16.4999 16.5859V4.5H18.4999Z" fill={color}/>
  <path d="M6.49988 4C6.76509 4 7.01937 4.10544 7.20691 4.29297L11.7069 8.79297L10.2928 10.207L7.49988 7.41406V19.5H5.49988V7.41406L2.70691 10.207L1.29285 8.79297L5.79285 4.29297L5.86609 4.22656C6.04404 4.08073 6.26779 4 6.49988 4Z" fill={color}/>
    </svg>
  );
};

export default UpDown;
