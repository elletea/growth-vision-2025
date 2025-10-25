import React from 'react';

export interface MedalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Medal: React.FC<MedalProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.4999 3C20.8711 3 21.2117 3.2057 21.3846 3.53418C21.5575 3.86278 21.5344 4.26041 21.3241 4.56641L16.6122 11.4199C17.779 12.5949 18.4999 14.2133 18.4999 16C18.4999 19.5899 15.5897 22.5 11.9999 22.5C8.41003 22.5 5.49988 19.5898 5.49988 16C5.49988 14.2133 6.22076 12.5949 7.38757 11.4199L2.67566 4.56641C2.46538 4.26041 2.44226 3.86278 2.61511 3.53418C2.78805 3.2057 3.12864 3 3.49988 3H20.4999ZM11.9999 11.5C9.5146 11.5 7.49988 13.5147 7.49988 16C7.49988 18.4853 9.5146 20.5 11.9999 20.5C14.4852 20.5 16.4999 18.4853 16.4999 16C16.4999 13.5147 14.4852 11.5 11.9999 11.5ZM5.40125 5L8.9989 10.2334C9.36432 10.0428 9.75017 9.88659 10.1522 9.76758L13.1805 5H5.40125ZM15.5487 5L12.6698 9.5332C13.5034 9.61854 14.2898 9.86324 14.9999 10.2334L18.5985 5H15.5487Z" fill={color}/>
    </svg>
  );
};

export default Medal;
