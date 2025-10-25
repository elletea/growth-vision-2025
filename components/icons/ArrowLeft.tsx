import React from 'react';

export interface ArrowLeftProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({
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
      <path d="M12.2074 5.20654L6.41445 10.9995H20.0004V12.9995H6.41445L12.2074 18.7925L10.7934 20.2065L3.29336 12.7065C2.90288 12.316 2.90285 11.683 3.29336 11.2925L10.7934 3.79248L12.2074 5.20654Z" fill={color}/>
    </svg>
  );
};

export default ArrowLeft;
