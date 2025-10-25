import React from 'react';

export interface MessageSupportProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageSupport: React.FC<MessageSupportProps> = ({
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
      <path d="M17.5 3.5C20.2614 3.5 22.5 5.73858 22.5 8.5V13.5C22.5 16.2614 20.2614 18.5 17.5 18.5V16.5C19.1568 16.5 20.5 15.1568 20.5 13.5V8.5C20.5 6.84315 19.1569 5.5 17.5 5.5H6.5C4.84315 5.5 3.5 6.84315 3.5 8.5V13.5C3.50003 15.1568 4.84317 16.5 6.5 16.5H9.62012C10.1096 16.5001 10.5823 16.6798 10.9482 17.0049L15.1641 20.752L13.8359 22.2471L9.62012 18.5H6.5C3.7386 18.5 1.50003 16.2614 1.5 13.5V8.5C1.5 5.73858 3.73858 3.5 6.5 3.5H17.5Z" fill={color}/>
  <path d="M14.75 16C15.44 16 16 16.56 16 17.25C16 17.94 15.44 18.5 14.75 18.5C14.06 18.5 13.5 17.94 13.5 17.25C13.5 16.56 14.06 16 14.75 16Z" fill={color}/>
  <path d="M14.75 7C16.7497 7.00003 18.2498 8.52911 18.25 10.46C18.25 11.4417 17.8456 12.2682 17.1777 12.8457C16.7667 13.201 16.2755 13.4457 15.75 13.5918V14.5H13.75V11.8105L14.6875 11.752C15.2156 11.719 15.6183 11.5498 15.8701 11.332C16.1028 11.1307 16.25 10.8549 16.25 10.46C16.2499 9.63739 15.6489 9.00003 14.75 9C13.8517 9 13.1729 9.65119 12.9824 10.6475L11.0176 10.2725C11.3397 8.58647 12.6552 7 14.75 7Z" fill={color}/>
    </svg>
  );
};

export default MessageSupport;
