import React from 'react';

export interface CheckProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Check: React.FC<CheckProps> = ({
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
      <path d="M22.7573 5.6499L10.7573 19.6499C10.5673 19.8715 10.2905 19.9995 9.99854 19.9995C9.70678 19.9994 9.42963 19.8714 9.23975 19.6499L3.23975 12.6499L4.75732 11.3491L9.99854 17.4634L21.2397 4.34912L22.7573 5.6499Z" fill={color}/>
    </svg>
  );
};

export default Check;
