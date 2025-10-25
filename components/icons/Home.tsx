import React from 'react';

export interface HomeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Home: React.FC<HomeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11.3691 3.22486C11.7619 2.90451 12.3409 2.92711 12.707 3.29322L20.707 11.2932C20.8945 11.4807 21 11.7351 21 12.0003V20.0003C20.9999 20.5524 20.5522 21.0003 20 21.0003H4C3.44779 21.0003 3.00012 20.5524 3 20.0003V12.0003L3.00488 11.9016C3.02757 11.6727 3.12889 11.4574 3.29297 11.2932L11.293 3.29322L11.3691 3.22486ZM5 12.4143V19.0003H19V12.4143L12 5.41432L5 12.4143Z" fill={color}/>
    </svg>
  );
};

export default Home;
