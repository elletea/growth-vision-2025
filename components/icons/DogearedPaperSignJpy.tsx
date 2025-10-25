import React from 'react';

export interface DogearedPaperSignJpyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DogearedPaperSignJpy: React.FC<DogearedPaperSignJpyProps> = ({
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
      <path d="M11.0008 4.5H5.76055C5.08557 7.17352 5.39978 9.30838 5.79863 11.6445C6.18621 13.9145 6.65174 16.3777 6.19414 19.5H18.1727C18.3391 18.5054 18.3807 17.6607 18.3807 16.5H20.3807C20.3807 18.046 20.3118 19.1536 19.9783 20.71C19.8794 21.1708 19.4711 21.4999 18.9998 21.5H4.99981C4.69806 21.4999 4.41224 21.3635 4.22246 21.1289C4.03261 20.8941 3.959 20.5853 4.02227 20.29C4.72716 16.9999 4.26565 14.55 3.82695 11.9805C3.38528 9.39351 2.97133 6.69441 4.04473 3.20605C4.17383 2.78663 4.56098 2.50016 4.99981 2.5H11.0008V4.5Z" fill={color}/>
  <path d="M22.2459 4.08105L19.659 7.70312H21.4324V9.70312H18.7166V10.6758H21.4324V12.6758H18.7166V14.6494H16.7166V12.6758H13.9998V10.6758H16.7166V9.70312H13.9998V7.70312H15.7732L13.1863 4.08105L14.8133 2.91895L17.7156 6.98242L20.6189 2.91895L22.2459 4.08105Z" fill={color}/>
    </svg>
  );
};

export default DogearedPaperSignJpy;
