import React from 'react';

export interface SquareAiProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareAi: React.FC<SquareAiProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1C13 4.73686 13.9106 7.17374 15.4883 8.69238C17.0736 10.2182 19.5212 11 23 11V13C19.5212 13 17.0736 13.7818 15.4883 15.3076C13.9106 16.8263 13 19.2631 13 23H11C11 19.5212 10.2182 17.0736 8.69238 15.4883C7.17374 13.9106 4.73686 13 1 13V11C4.73686 11 7.17374 10.0894 8.69238 8.51172C10.2182 6.9264 11 4.47881 11 1H13ZM12.001 6.97461C11.5498 8.085 10.9357 9.06525 10.1338 9.89844C9.26427 10.8019 8.2082 11.4978 6.9707 12C8.2082 12.5022 9.26427 13.1981 10.1338 14.1016C10.9355 14.9345 11.5499 15.9144 12.001 17.0244C12.5031 15.7889 13.1992 14.7347 14.1016 13.8662C14.9336 13.0654 15.912 12.451 17.0205 12C15.912 11.549 14.9336 10.9346 14.1016 10.1338C13.199 9.26514 12.5031 8.21051 12.001 6.97461Z" fill={color}/>
    </svg>
  );
};

export default SquareAi;
