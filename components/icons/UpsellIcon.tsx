import React from 'react';

export interface UpsellIconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UpsellIcon: React.FC<UpsellIconProps> = ({
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
      <path d="M10.9881 1.89149C11.3596 1.00101 12.6401 1.00102 13.0115 1.89149L13.0457 1.98329L15.1961 8.60048H22.1541C23.2193 8.60085 23.6623 9.9644 22.8006 10.5907L17.1707 14.6796L19.3211 21.2977C19.65 22.311 18.4907 23.1534 17.6287 22.5272L11.9998 18.4374L6.3709 22.5272C5.50898 23.1531 4.3498 22.3108 4.67852 21.2977L6.82793 14.6796L1.19903 10.5907C0.337552 9.9644 0.78058 8.6011 1.84551 8.60048H8.80352L10.9539 1.98329L10.9881 1.89149Z" fill={color}/>
    </svg>
  );
};

export default UpsellIcon;
