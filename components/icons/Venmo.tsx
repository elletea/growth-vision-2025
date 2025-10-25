import React from 'react';

export interface VenmoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Venmo: React.FC<VenmoProps> = ({
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
      <path d="M18.681 4C19.2645 4.9606 19.5278 5.94972 19.5278 7.1997C19.5278 11.1856 16.1128 16.3638 13.3412 20H7.01085L4.47217 4.87265L10.0151 4.34822L11.3573 15.1123C12.6115 13.0762 14.1592 9.87677 14.1592 7.69501C14.1592 6.50116 13.9542 5.68766 13.6333 5.01794L18.681 4Z" fill={color}/>
    </svg>
  );
};

export default Venmo;
