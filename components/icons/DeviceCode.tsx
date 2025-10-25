import React from 'react';

export interface DeviceCodeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DeviceCode: React.FC<DeviceCodeProps> = ({
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
      <path d="M21.9998 19.5H19.9998V4.5H21.9998V19.5Z" fill={color}/>
  <path d="M5.99976 10.0566L7.9187 8.68652L9.08081 10.3135L6.71851 11.999L9.08081 13.6865L7.9187 15.3135L5.99976 13.9424V16H3.99976V13.9424L2.08081 15.3135L0.918701 13.6865L3.27905 11.999L0.918701 10.3135L2.08081 8.68652L3.99976 10.0566V8H5.99976V10.0566Z" fill={color}/>
  <path d="M14.9998 10.0566L16.9187 8.68652L18.0808 10.3135L15.7185 11.999L18.0808 13.6865L16.9187 15.3135L14.9998 13.9424V16H12.9998V13.9424L11.0808 15.3135L9.9187 13.6865L12.2791 11.999L9.9187 10.3135L11.0808 8.68652L12.9998 10.0566V8H14.9998V10.0566Z" fill={color}/>
    </svg>
  );
};

export default DeviceCode;
