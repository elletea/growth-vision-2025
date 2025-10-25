import React from 'react';

export interface EnvelopeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Envelope: React.FC<EnvelopeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21 4.5C21.5523 4.5 22 4.94772 22 5.5V18.5C22 19.0523 21.5523 19.5 21 19.5H3C2.44772 19.5 2 19.0523 2 18.5V5.5C2 4.94772 2.44772 4.5 3 4.5H21ZM12.6143 13.7891C12.2531 14.0699 11.7469 14.0699 11.3857 13.7891L4 8.04395V17.5H20V8.04395L12.6143 13.7891ZM12 11.7324L18.7285 6.5H5.27148L12 11.7324Z" fill={color}/>
    </svg>
  );
};

export default Envelope;
