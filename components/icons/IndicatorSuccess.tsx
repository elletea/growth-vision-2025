import React from 'react';

export interface IndicatorSuccessProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorSuccess: React.FC<IndicatorSuccessProps> = ({
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
      <path d="M18.0088 8.81053L11.5088 16.3105C11.3194 16.529 11.044 16.6546 10.7549 16.6553C10.4659 16.6558 10.1904 16.531 10 16.3135L6.50001 12.3135L8.00587 10.9971L10.749 14.1318L16.4971 7.49998L18.0088 8.81053Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M3.51466 3.51463C8.20092 -1.17156 15.7991 -1.17153 20.4854 3.51463C25.1716 8.2009 25.1716 15.799 20.4854 20.4853C15.7991 25.1716 8.20095 25.1716 3.51466 20.4853C-1.17152 15.799 -1.17159 8.20088 3.51466 3.51463ZM19.0713 4.92869C15.1661 1.02358 8.83394 1.02355 4.92873 4.92869C1.02352 8.8339 1.02359 15.166 4.92873 19.0713C8.83397 22.9765 15.1661 22.9765 19.0713 19.0713C22.9765 15.166 22.9765 8.83392 19.0713 4.92869Z" fill={color}/>
    </svg>
  );
};

export default IndicatorSuccess;
