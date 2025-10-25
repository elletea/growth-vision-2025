import React from 'react';

export interface MessageEllipsesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageEllipses: React.FC<MessageEllipsesProps> = ({
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
      <path d="M17.5 3.5C20.2614 3.5 22.5 5.73858 22.5 8.5V13.5C22.5 16.2614 20.2614 18.5 17.5 18.5H15V16.5H17.5C19.1569 16.5 20.5 15.1569 20.5 13.5V8.5C20.5 6.84315 19.1569 5.5 17.5 5.5H6.5C4.84315 5.5 3.5 6.84315 3.5 8.5V13.5C3.5 15.1569 4.84315 16.5 6.5 16.5H9.62012C10.1096 16.5001 10.5823 16.6798 10.9482 17.0049L15.1641 20.752L13.8359 22.2471L9.62012 18.5H6.5C3.73858 18.5 1.5 16.2614 1.5 13.5V8.5C1.5 5.73858 3.73858 3.5 6.5 3.5H17.5Z" fill={color}/>
  <path d="M7.5 9.75C8.32841 9.75 8.99997 10.4216 9 11.25C9 12.0784 8.32843 12.75 7.5 12.75C6.67157 12.75 6 12.0784 6 11.25C6.00003 10.4216 6.67159 9.75 7.5 9.75Z" fill={color}/>
  <path d="M12 9.75C12.8284 9.75 13.5 10.4216 13.5 11.25C13.5 12.0784 12.8284 12.75 12 12.75C11.1716 12.75 10.5 12.0784 10.5 11.25C10.5 10.4216 11.1716 9.75 12 9.75Z" fill={color}/>
  <path d="M16.5 9.75C17.3284 9.75 18 10.4216 18 11.25C18 12.0784 17.3284 12.75 16.5 12.75C15.6716 12.75 15 12.0784 15 11.25C15 10.4216 15.6716 9.75 16.5 9.75Z" fill={color}/>
    </svg>
  );
};

export default MessageEllipses;
