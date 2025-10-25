import React from 'react';

export interface MessageClockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageClock: React.FC<MessageClockProps> = ({
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
  <path d="M12.5 11.5H15V13.5H11.5C10.9477 13.5 10.5 13.0522 10.5 12.5V8H12.5V11.5Z" fill={color}/>
    </svg>
  );
};

export default MessageClock;
