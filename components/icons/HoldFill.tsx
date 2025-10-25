import React from 'react';

export interface HoldFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HoldFill: React.FC<HoldFillProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M8.04395 2.00488C7.81505 2.02763 7.59962 2.12889 7.43555 2.29297L2.29297 7.43555C2.1055 7.62302 2.00007 7.87746 2 8.14258V15.8574C2.00007 16.1225 2.1055 16.377 2.29297 16.5645L7.43555 21.707C7.62302 21.8945 7.87746 21.9999 8.14258 22H15.8574C16.1225 21.9999 16.377 21.8945 16.5645 21.707L21.707 16.5645C21.8945 16.377 21.9999 16.1225 22 15.8574V8.14258C21.9999 7.87746 21.8945 7.62302 21.707 7.43555L16.5645 2.29297C16.377 2.1055 16.1225 2.00007 15.8574 2H8.14258L8.04395 2.00488ZM16 11V13H8V11H16Z" fill={color}/>
    </svg>
  );
};

export default HoldFill;
