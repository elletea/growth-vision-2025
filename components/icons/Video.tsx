import React from 'react';

export interface VideoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Video: React.FC<VideoProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16 5.5C16.5523 5.5 17 5.94772 17 6.5V9.31543L21.0215 7.12207C21.3313 6.95322 21.7073 6.95954 22.0107 7.13965C22.3142 7.31981 22.5 7.64707 22.5 8V16C22.5 16.3529 22.3142 16.6802 22.0107 16.8604C21.7073 17.0405 21.3313 17.0468 21.0215 16.8779L17 14.6836V17.5C17 18.0523 16.5523 18.5 16 18.5H2.5C1.94772 18.5 1.5 18.0523 1.5 17.5V6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H16ZM3.5 16.5H15V7.5H3.5V16.5ZM17 11.5928V12.4062L20.5 14.3154V9.68359L17 11.5928Z" fill={color}/>
    </svg>
  );
};

export default Video;
