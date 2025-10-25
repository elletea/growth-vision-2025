import React from 'react';

export interface LocationArrowProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LocationArrow: React.FC<LocationArrowProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 3C12.3789 3 12.7253 3.21396 12.8947 3.55273L20.8947 19.5527C21.0908 19.945 21.0084 20.4195 20.6915 20.7227C20.3744 21.0258 19.896 21.0867 19.5128 20.873L12.0001 16.6836L4.48743 20.873C4.10425 21.0867 3.62587 21.0258 3.30872 20.7227C2.99185 20.4195 2.90946 19.945 3.1056 19.5527L11.1056 3.55273L11.1769 3.43164C11.3618 3.16368 11.6687 3.00001 12.0001 3ZM6.34388 17.5469L11.5128 14.665C11.8156 14.4962 12.1847 14.4962 12.4874 14.665L17.6554 17.5469L12.0001 6.23633L6.34388 17.5469Z" fill={color}/>
    </svg>
  );
};

export default LocationArrow;
