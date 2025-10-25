import React from 'react';

export interface MessageHumanProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageHuman: React.FC<MessageHumanProps> = ({
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
      <path d="M7 6.5H6.5C4.84315 6.5 3.5 7.84315 3.5 9.5V14.5C3.5 16.1569 4.84315 17.5 6.5 17.5H9.62012C10.1096 17.5001 10.5823 17.6798 10.9482 18.0049L15.1641 21.752L13.8359 23.2471L9.62012 19.5H6.5C3.73858 19.5 1.5 17.2614 1.5 14.5V9.5C1.5 6.73858 3.73858 4.5 6.5 4.5H7V6.5Z" fill={color}/>
  <path d="M17.5 4.5C20.2614 4.5 22.5 6.73858 22.5 9.5V14.5C22.5 17.2614 20.2614 19.5 17.5 19.5H15V17.5H17.5C19.1569 17.5 20.5 16.1569 20.5 14.5V9.5C20.5 7.84315 19.1569 6.5 17.5 6.5H17V4.5H17.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 9.5C15.0939 9.5 18 11.5419 18 14.5C18 15.0523 17.5523 15.5 17 15.5H7C6.44772 15.5 6 15.0523 6 14.5C6 11.5419 8.90606 9.5 12 9.5ZM12 11.5C10.1297 11.5 8.76859 12.4134 8.24121 13.5H15.7588C15.2314 12.4134 13.8703 11.5 12 11.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C13.6569 2.5 15 3.84315 15 5.5C15 7.15685 13.6569 8.5 12 8.5C10.3431 8.5 9 7.15685 9 5.5C9 3.84315 10.3431 2.5 12 2.5ZM12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5Z" fill={color}/>
    </svg>
  );
};

export default MessageHuman;
