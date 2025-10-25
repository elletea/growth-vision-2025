import React from 'react';

export interface ExclamationCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ExclamationCircle: React.FC<ExclamationCircleProps> = ({
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
      <path d="M13.0002 7.00022V12.5002H11.0002V7.00022H13.0002Z" fill={color}/>
  <path d="M12.0002 17.5002C12.8286 17.5002 13.5002 16.8286 13.5002 16.0002C13.5002 15.1718 12.8286 14.5002 12.0002 14.5002C11.1718 14.5002 10.5002 15.1718 10.5002 16.0002C10.5002 16.8286 11.1718 17.5002 12.0002 17.5002Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92893 4.92893C8.83417 1.02369 15.1663 1.02369 19.0715 4.92893C22.9768 8.83418 22.9768 15.1663 19.0715 19.0715C15.1663 22.9768 8.83417 22.9768 4.92893 19.0715C1.02369 15.1663 1.02369 8.83417 4.92893 4.92893ZM17.6574 6.34299C14.5333 3.2188 9.46719 3.2188 6.34299 6.34299C3.2188 9.46719 3.2188 14.5333 6.34299 17.6574C9.46719 20.7816 14.5333 20.7816 17.6574 17.6574C20.7816 14.5333 20.7816 9.46719 17.6574 6.34299Z" fill={color}/>
    </svg>
  );
};

export default ExclamationCircle;
