import React from 'react';

export interface YoutubeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Youtube: React.FC<YoutubeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8139 5.41797C20.6744 5.64795 21.352 6.3256 21.582 7.18614C22 8.74582 22 12 22 12C22 12 22 15.2541 21.582 16.814C21.352 17.6744 20.6744 18.352 19.8139 18.5821C18.2542 19 12 19 12 19C12 19 5.74583 19 4.18612 18.5821C3.32564 18.352 2.6479 17.6744 2.41792 16.814C2 15.2541 2 12 2 12C2 12 2 8.74582 2.41792 7.18614C2.6479 6.3256 3.32564 5.64795 4.18612 5.41797C5.74583 5 12 5 12 5C12 5 18.2542 5 19.8139 5.41797ZM15.1818 12.0001L9.95454 14.9545V9.04545L15.1818 12.0001Z" fill={color}/>
    </svg>
  );
};

export default Youtube;
