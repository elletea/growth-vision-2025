import React from 'react';

export interface DogearedPaperProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DogearedPaper: React.FC<DogearedPaperProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9994 2.5C12.2637 2.5 12.518 2.60455 12.7054 2.79102L19.2357 9.29102L19.3431 9.41699C19.4389 9.55049 19.5004 9.7065 19.5218 9.87109C19.9137 12.8864 20.9522 16.1627 19.9779 20.71C19.879 21.1708 19.4708 21.5 18.9994 21.5H4.99937C4.69762 21.4998 4.41177 21.3635 4.22202 21.1289C4.03223 20.8941 3.95858 20.5853 4.02183 20.29C4.72674 16.9999 4.26522 14.55 3.82652 11.9805C3.38484 9.39353 2.97092 6.69437 4.04429 3.20605C4.17335 2.78664 4.56059 2.50023 4.99937 2.5H11.9994ZM5.76011 4.5C5.08514 7.17349 5.39934 9.30841 5.7982 11.6445C6.18577 13.9146 6.65131 16.3776 6.1937 19.5H18.1722C18.7241 16.1752 18.0916 13.7573 17.6644 11H12.0003C11.4482 10.9999 11.0004 10.5522 11.0003 10L10.9994 4.5H5.76011ZM13.0003 9H16.1078L12.9994 5.90625L13.0003 9Z" fill={color}/>
    </svg>
  );
};

export default DogearedPaper;
