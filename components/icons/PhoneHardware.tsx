import React from 'react';

export interface PhoneHardwareProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneHardware: React.FC<PhoneHardwareProps> = ({
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
      <path d="M10.5 4.00026H5V20.0003H16V17.0003H18V20.0003C17.9999 21.1047 17.1045 22.0003 16 22.0003H5C3.89551 22.0003 3.00012 21.1047 3 20.0003V4.00026C3 2.89569 3.89543 2.00026 5 2.00026H10.5V4.00026Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 2.00026C16.367 1.21931 17.633 1.21931 18.4141 2.00026L23 6.5862C23.7808 7.36724 23.7809 8.63333 23 9.41432L18.4141 14.0003C17.6331 14.7811 16.3669 14.7811 15.5859 14.0003L14 12.4143L12.707 13.7073L11.293 12.2932L12.5859 11.0003L11 9.41432C10.2191 8.63333 10.2192 7.36724 11 6.5862L15.5859 2.00026ZM12.4141 8.00026L17 12.5862L21.5859 8.00026L17 3.41432L12.4141 8.00026Z" fill={color}/>
    </svg>
  );
};

export default PhoneHardware;
