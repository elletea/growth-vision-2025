import React from 'react';

export interface MartiniGlassProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MartiniGlass: React.FC<MartiniGlassProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.0002 3.5C21.4098 3.5 21.7785 3.75018 21.9299 4.13086C22.0809 4.51137 21.9843 4.94537 21.6867 5.22656L13.0002 13.4297V19H17.0002V21H7.00017V19H11.0002V13.4297L2.31365 5.22656C2.01608 4.94538 1.91941 4.51136 2.07048 4.13086C2.22183 3.75019 2.59052 3.50001 3.00017 3.5H21.0002ZM12.0002 11.625L18.4855 5.5H5.51482L12.0002 11.625Z" fill={color}/>
    </svg>
  );
};

export default MartiniGlass;
