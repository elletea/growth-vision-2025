import React from 'react';

export interface PlayCircleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlayCircle: React.FC<PlayCircleProps> = ({
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
      <path d="M9.7002 8.34459C9.70029 8.1911 9.86671 8.0946 10 8.17076L16.3965 11.826C16.5308 11.9028 16.5308 12.0969 16.3965 12.1737L10 15.829C9.86667 15.9052 9.7002 15.8087 9.7002 15.6551V8.34459Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.92833 4.92858C8.8335 1.02341 15.1657 1.02356 19.0709 4.92858C22.9762 8.83382 22.9762 15.1659 19.0709 19.0712C15.1657 22.9764 8.83358 22.9764 4.92833 19.0712C1.02331 15.1659 1.02316 8.83375 4.92833 4.92858ZM17.6568 6.34264C14.5326 3.21867 9.46652 3.21852 6.3424 6.34264C3.21828 9.46676 3.21842 14.5329 6.3424 17.6571C9.46659 20.7813 14.5327 20.7813 17.6568 17.6571C20.781 14.5329 20.781 9.46683 17.6568 6.34264Z" fill={color}/>
    </svg>
  );
};

export default PlayCircle;
