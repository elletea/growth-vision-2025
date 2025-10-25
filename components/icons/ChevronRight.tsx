import React from 'react';

export interface ChevronRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 7.29291C12.0976 7.68343 12.0976 8.3166 11.7071 8.70712L5.70711 14.7071L4.29289 13.2929L9.58579 8.00001L4.29289 2.70712L5.70711 1.29291L11.7071 7.29291Z" fill={color}/>
    </svg>
  );
};

export default ChevronRight;
