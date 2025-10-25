import React from 'react';

export interface GrubhubProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Grubhub: React.FC<GrubhubProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 3C19.2091 3.00004 21 4.79089 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17ZM8.79687 7.22559C6.71884 7.22559 5.51764 9.00287 5.51757 12.0898C5.51757 15.0688 6.6826 16.7744 8.72461 16.7744C9.38527 16.7744 9.92626 16.5108 10.3467 16.0303L10.4307 16.6309H11.752C11.7279 15.4176 11.7276 13.2432 11.7637 11.5615H8.56836V13.3877H9.79394C9.70982 14.3365 9.33733 14.9853 8.79687 14.9854C8.04012 14.9854 7.63185 13.916 7.63183 12.0781C7.63183 10.1084 8.05192 9.03936 8.77246 9.03906C9.28893 9.03906 9.60113 9.69958 9.69726 10.8525H11.7754C11.6672 8.58247 10.5866 7.22563 8.79687 7.22559ZM12.6641 16.6289H14.7061V12.9414H16.0635V16.6289H18.1172V7.33203H16.0635V11.1152H14.7061V7.33203H12.6641V16.6289Z" fill={color}/>
    </svg>
  );
};

export default Grubhub;
