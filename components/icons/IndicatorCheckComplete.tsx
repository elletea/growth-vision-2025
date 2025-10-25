import React from 'react';

export interface IndicatorCheckCompleteProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorCheckComplete: React.FC<IndicatorCheckCompleteProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 3.5C16.4183 3.5 20 7.08172 20 11.5C20 15.9183 16.4183 19.5 12 19.5C7.58172 19.5 4 15.9183 4 11.5C4 7.08172 7.58172 3.5 12 3.5ZM10.7998 12.6709L9.00684 10.5801L7.79297 11.6201L10.1934 14.4199L10.2529 14.4834C10.4003 14.6215 10.5956 14.7001 10.7998 14.7002C11.0333 14.7002 11.2552 14.5972 11.4072 14.4199L16.207 8.82031L14.9932 7.7793L10.7998 12.6709Z" fill={color}/>
    </svg>
  );
};

export default IndicatorCheckComplete;
