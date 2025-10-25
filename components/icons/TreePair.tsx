import React from 'react';

export interface TreePairProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TreePair: React.FC<TreePairProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5002 2C7.91945 2.00009 8.29414 2.26176 8.43868 2.65527L13.05 15.2334L16.5744 6.62109L16.6418 6.48633C16.8204 6.18784 17.1451 6 17.5002 6C17.906 6.0002 18.2723 6.24551 18.426 6.62109L22.926 17.6211C23.052 17.9294 23.0158 18.2811 22.8303 18.5576C22.6446 18.834 22.3331 18.9998 22.0002 19H18.5002V22H16.5002V19H8.5002V22H6.5002V19H2.0002C1.67356 19 1.36696 18.84 1.17989 18.5723C0.993096 18.3045 0.949328 17.9618 1.06173 17.6553L6.56173 2.65527L6.62618 2.51465C6.80044 2.2007 7.13315 2 7.5002 2ZM3.43184 17H11.5686L7.5002 5.90332L3.43184 17ZM14.4904 17H20.51L17.5002 9.6416L14.4904 17Z" fill={color}/>
    </svg>
  );
};

export default TreePair;
