import React from 'react';

export interface EthernetExclamationProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EthernetExclamation: React.FC<EthernetExclamationProps> = ({
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
      <path d="M7.27432 7.13281L3.29287 12L7.27432 16.8672L5.72549 18.1328L1.22549 12.6328C0.924675 12.2646 0.924675 11.7354 1.22549 11.3672L5.72549 5.86719L7.27432 7.13281Z" fill={color}/>
  <path d="M22.7743 11.3672C23.0752 11.7354 23.0752 12.2646 22.7743 12.6328L18.2743 18.1328L16.7255 16.8672L20.7069 12L16.7255 7.13281L18.2743 5.86719L22.7743 11.3672Z" fill={color}/>
  <path d="M11.9999 15C12.8283 15 13.4999 15.6716 13.4999 16.5C13.4999 17.3284 12.8283 18 11.9999 18C11.1715 18 10.4999 17.3284 10.4999 16.5C10.4999 15.6716 11.1715 15 11.9999 15Z" fill={color}/>
  <path d="M12.9999 13H10.9999V6H12.9999V13Z" fill={color}/>
    </svg>
  );
};

export default EthernetExclamation;
