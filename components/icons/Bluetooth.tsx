import React from 'react';

export interface BluetoothProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bluetooth: React.FC<BluetoothProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6084 2.0987C11.9547 1.93226 12.3659 1.97898 12.666 2.21881L18.625 6.98346C18.868 7.17782 19.0065 7.47513 19 7.7862C18.9933 8.09717 18.8417 8.38744 18.5908 8.57135L13.9131 12.0001L18.5908 15.4288C18.8417 15.6127 18.9933 15.903 19 16.2139C19.0065 16.525 18.868 16.8223 18.625 17.0167L12.666 21.7813C12.3659 22.0212 11.9547 22.0679 11.6084 21.9014C11.262 21.7349 11.042 21.3844 11.042 21.0001V14.1046L5.59082 18.1006L4.40918 16.4874L10.5303 12.0001L4.40918 7.51276L5.59082 5.89948L11.042 9.89459V3.00006C11.042 2.61573 11.262 2.26522 11.6084 2.0987ZM13.042 18.919L16.3545 16.2696L13.042 13.8409V18.919ZM13.042 10.1583L16.3545 7.72956L13.042 5.08014V10.1583Z" fill={color}/>
    </svg>
  );
};

export default Bluetooth;
