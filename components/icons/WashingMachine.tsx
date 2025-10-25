import React from 'react';

export interface WashingMachineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WashingMachine: React.FC<WashingMachineProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6ZM9.56836 12.0166C9.16187 11.9624 8.67115 12.0207 8.02734 12.4678C8.259 14.4565 9.94911 16 12 16C13.5196 16 14.8405 15.1523 15.5176 13.9043C15.0642 14.0077 14.6146 14.0256 14.167 13.9658C13.1223 13.8264 12.2027 13.2749 11.4971 12.8643C10.7144 12.4088 10.1457 12.0937 9.56836 12.0166ZM12 8C10.4806 8 9.15854 8.84694 8.48145 10.0947C8.93509 9.99119 9.38514 9.97441 9.83301 10.0342C10.8777 10.1736 11.7973 10.7251 12.5029 11.1357C13.2856 11.5912 13.8543 11.9063 14.4316 11.9834C14.8381 12.0376 15.328 11.9782 15.9717 11.5312C15.7395 9.54305 14.0505 8 12 8Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.5 2.5C21.0523 2.5 21.5 2.94772 21.5 3.5V20.5C21.5 21.0523 21.0523 21.5 20.5 21.5H3.5C2.94772 21.5 2.5 21.0523 2.5 20.5V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H20.5ZM4.5 19.5H19.5V4.5H4.5V19.5Z" fill={color}/>
    </svg>
  );
};

export default WashingMachine;
