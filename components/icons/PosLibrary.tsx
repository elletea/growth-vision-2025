import React from 'react';

export interface PosLibraryProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PosLibrary: React.FC<PosLibraryProps> = ({
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
      <path d="M4.83691 16.2227C5.81861 16.2227 6.615 17.0184 6.61523 18C6.61522 18.9818 5.81874 19.7783 4.83691 19.7783C3.85532 19.778 3.05959 18.9817 3.05957 18C3.0598 17.0185 3.85546 16.2229 4.83691 16.2227Z" fill={color}/>
  <path d="M21.001 19H9V17H21.001V19Z" fill={color}/>
  <path d="M4.83691 10.2227C5.81861 10.2227 6.615 11.0184 6.61523 12C6.61523 12.9818 5.81875 13.7783 4.83691 13.7783C3.85532 13.778 3.05957 12.9817 3.05957 12C3.0598 11.0185 3.85546 10.2229 4.83691 10.2227Z" fill={color}/>
  <path d="M21.001 13H9V11H21.001V13Z" fill={color}/>
  <path d="M4.77734 4.22266C5.75904 4.22266 6.55543 5.01836 6.55566 6C6.55566 6.98184 5.75918 7.77832 4.77734 7.77832C3.7957 7.77809 3 6.98169 3 6C3.00023 5.0185 3.79585 4.22289 4.77734 4.22266Z" fill={color}/>
  <path d="M21.001 7H9V5H21.001V7Z" fill={color}/>
    </svg>
  );
};

export default PosLibrary;
