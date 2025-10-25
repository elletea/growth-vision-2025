import React from 'react';

export interface CeilingLampProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CeilingLamp: React.FC<CeilingLampProps> = ({
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
      <path d="M15.707 20.207C14.727 21.1869 13.3234 21.625 12 21.625C10.6765 21.6249 9.27284 21.187 8.29292 20.207L9.70698 18.793C10.227 19.313 11.0735 19.6249 12 19.625C12.9264 19.625 13.7729 19.3129 14.2929 18.793L15.707 20.207Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M13 6H17C17.5522 6 18 6.44772 18 7C18 8.3772 17.3184 9.65258 16.1982 10.5713C18.6993 11.2686 21.3053 12.7176 22.872 15.5107C23.0457 15.8204 23.0427 16.1995 22.8632 16.5059C22.6838 16.8121 22.3549 17 22 17H1.99995C1.64507 16.9999 1.31609 16.812 1.13667 16.5059C0.957319 16.1995 0.95427 15.8204 1.12788 15.5107C2.69439 12.718 5.29993 11.2687 7.80073 10.5713C6.68099 9.65262 5.99995 8.3769 5.99995 7C5.99995 6.73484 6.10546 6.48049 6.29292 6.29297C6.4804 6.10549 6.73482 6.00006 6.99995 6H11V2H13V6ZM12 12C9.55149 12 6.16071 12.682 3.9687 15H20.0312C17.8391 12.682 14.4484 12 12 12ZM8.25093 8C8.73931 8.99253 9.93426 9.91996 11.7597 9.99512L12 10L12.2402 9.99512C14.0657 9.92003 15.2606 8.99253 15.749 8H8.25093Z" fill={color}/>
    </svg>
  );
};

export default CeilingLamp;
