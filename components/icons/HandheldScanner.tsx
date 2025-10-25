import React from 'react';

export interface HandheldScannerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HandheldScanner: React.FC<HandheldScannerProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4995 2.03184C19.8198 1.79718 20.9931 2.90313 20.8364 4.23497L20.0972 10.5143C19.9786 11.5212 19.1247 12.2806 18.1108 12.2809H13.2534L10.7944 20.8336C10.548 21.6903 9.76398 22.2806 8.87256 22.2809H7.00049C5.89599 22.2809 5.0006 21.3853 5.00049 20.2809V12.1061C3.83577 11.694 2.9996 10.5867 2.99951 9.28087V7.3043C2.99951 5.85025 4.04354 4.605 5.4751 4.3502L18.4995 2.03184ZM7.00049 12.2809V20.2809H8.87256L11.1724 12.2809H7.00049ZM5.82568 6.31993C5.3485 6.40486 5.00049 6.81962 5.00049 7.3043V9.28087C5.0006 9.83305 5.44827 10.2809 6.00049 10.2809H18.1108L18.8501 4.00157L5.82568 6.31993Z" fill={color}/>
    </svg>
  );
};

export default HandheldScanner;
