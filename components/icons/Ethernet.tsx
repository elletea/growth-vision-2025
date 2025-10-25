import React from 'react';

export interface EthernetProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Ethernet: React.FC<EthernetProps> = ({
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
  <path d="M7.2499 10.75C7.94026 10.75 8.4999 11.3096 8.4999 12C8.4999 12.6904 7.94026 13.25 7.2499 13.25C6.5596 13.2499 5.9999 12.6903 5.9999 12C5.9999 11.3097 6.5596 10.7501 7.2499 10.75Z" fill={color}/>
  <path d="M11.9999 10.75C12.6903 10.75 13.2499 11.3096 13.2499 12C13.2499 12.6904 12.6903 13.25 11.9999 13.25C11.3096 13.2499 10.7499 12.6903 10.7499 12C10.7499 11.3097 11.3096 10.7501 11.9999 10.75Z" fill={color}/>
  <path d="M16.2499 10.75C16.9403 10.75 17.4999 11.3096 17.4999 12C17.4999 12.6904 16.9403 13.25 16.2499 13.25C15.5596 13.2499 14.9999 12.6903 14.9999 12C14.9999 11.3097 15.5596 10.7501 16.2499 10.75Z" fill={color}/>
    </svg>
  );
};

export default Ethernet;
