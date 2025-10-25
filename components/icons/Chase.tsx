import React from 'react';

export interface ChaseProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Chase: React.FC<ChaseProps> = ({
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
      <path d="M8.80322 3.63316C8.80322 3.28246 9.08762 2.99805 9.43874 2.99805L15.2112 2.99846L20.5696 8.08754H8.80322V3.63316Z" fill={color}/>
  <path d="M20.3645 8.80029C20.7177 8.80029 21 9.08348 21 9.435L20.998 15.2063L15.9114 20.5671V8.80029H20.3645Z" fill={color}/>
  <path d="M14.562 21.002C14.9123 21.002 15.1967 20.7172 15.1967 20.3657V15.913H3.42993L8.7891 21.0012L14.562 21.002Z" fill={color}/>
  <path d="M3.63634 15.1941C3.28441 15.1941 3 14.908 3 14.5569L3.00082 8.78568L8.08867 3.42651V15.1941H3.63634Z" fill={color}/>
    </svg>
  );
};

export default Chase;
