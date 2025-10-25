import React from 'react';

export interface ResyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Resy: React.FC<ResyProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18.293 20C14.3708 20 11.1809 17.4877 10.1421 13.9532H9.25418V19.7317H5.70703V4H11.6912C12.6241 4 13.4444 4.12974 14.1523 4.38973C14.8599 4.64868 15.4516 5.00288 15.9258 5.45127C16.4007 5.89914 16.7546 6.42274 16.9873 7.01935C17.2205 7.61673 17.3375 8.25443 17.3375 8.92948C17.3375 9.95174 17.1085 10.8443 16.6495 11.607C16.1914 12.3698 15.5441 12.9096 14.7072 13.3662C14.4382 13.5247 14.1329 13.6687 13.7072 13.78C14.5262 15.5069 16.1803 16.6451 18.293 16.6451V20ZM11.5848 11.2164C12.2603 11.2164 12.7915 11.0197 13.1774 10.6268C13.5634 10.234 13.7562 9.73839 13.7562 9.14101C13.7562 8.49595 13.5634 7.98475 13.1774 7.60704C12.7915 7.22985 12.2603 7.04145 11.5848 7.04145H9.40957V11.2164H11.5848Z" fill={color}/>
    </svg>
  );
};

export default Resy;
