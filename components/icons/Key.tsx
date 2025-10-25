import React from 'react';

export interface KeyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Key: React.FC<KeyProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6113 3.61106C14.7592 1.46332 18.2408 1.46337 20.3887 3.61106C22.5365 5.75892 22.5365 9.24052 20.3887 11.3884C18.4821 13.2949 15.5256 13.5081 13.3828 12.03L10.4131 14.9988L13.207 17.7927L11.793 19.2068L8.99902 16.4128L7.41309 17.9988L9.20703 19.7927L7.79297 21.2068L5.99902 19.4128L4.20703 21.2068L2.79297 19.7927L11.9688 10.6159C10.4917 8.47322 10.7052 5.51719 12.6113 3.61106ZM18.9746 5.02512C17.6078 3.65848 15.3922 3.65843 14.0254 5.02512C12.6586 6.39191 12.6587 8.6075 14.0254 9.97434C15.3922 11.3412 17.6078 11.3412 18.9746 9.97434C20.3414 8.6075 20.3414 6.39193 18.9746 5.02512Z" fill={color}/>
    </svg>
  );
};

export default Key;
