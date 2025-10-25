import React from 'react';

export interface ArrowMergeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowMerge: React.FC<ArrowMergeProps> = ({
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
      <path d="M10.0991 4.00439C10.328 4.02716 10.5435 4.12844 10.7075 4.29248C10.8949 4.4799 11.0004 4.73447 11.0005 4.99951V10.9995H20.0864L17.2935 8.20654L18.7075 6.79248L23.2075 11.2925C23.3949 11.4799 23.5003 11.7345 23.5005 11.9995C23.5005 12.2645 23.3947 12.5191 23.2075 12.7065L18.7075 17.2065L17.2935 15.7925L20.0864 12.9995H11.0005V18.9995C11.0005 19.5516 10.5526 19.9993 10.0005 19.9995H0.000488281V17.9995H9.00049V5.99951H0.000488281V3.99951H10.0005L10.0991 4.00439Z" fill={color}/>
    </svg>
  );
};

export default ArrowMerge;
