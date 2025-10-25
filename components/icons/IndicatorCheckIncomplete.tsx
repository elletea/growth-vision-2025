import React from 'react';

export interface IndicatorCheckIncompleteProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorCheckIncomplete: React.FC<IndicatorCheckIncompleteProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 18.2222C15.4364 18.2222 18.2222 15.4364 18.2222 12C18.2222 8.56356 15.4364 5.77778 12 5.77778C8.56356 5.77778 5.77778 8.56356 5.77778 12C5.77778 15.4364 8.56356 18.2222 12 18.2222ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill={color}/>
    </svg>
  );
};

export default IndicatorCheckIncomplete;
