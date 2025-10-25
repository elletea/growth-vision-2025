import React from 'react';

export interface AudioSlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AudioSlash: React.FC<AudioSlashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.207 4.41406L19.96 5.66016C23.0316 10.0746 22.6328 16.2533 18.7598 20.207L17.2803 18.7568C20.3577 15.6095 20.7516 10.7448 18.4629 7.15723L16.6934 8.92676C18.092 11.4884 17.7296 14.7987 15.6006 16.9775L14.1201 15.5273C15.4539 14.1638 15.7926 12.1677 15.1387 10.4814L13 12.6211V17.8145C12.9999 18.7951 11.8869 19.362 11.0938 18.7852L8.62891 16.9912L5.20703 20.4141L3.79297 19L6.99121 15.8008L6.17578 15.207H3.7002C3.03745 15.207 2.5 14.6696 2.5 14.0068V10.4072C2.5 9.74448 3.03745 9.20703 3.7002 9.20703H6.17578L11.0938 5.62891L11.2461 5.53418C12.0218 5.12465 12.9999 5.68022 13 6.59961V9.79297L19.793 3L21.207 4.41406ZM10.0605 15.5596L11 16.2422V14.6211L10.0605 15.5596ZM7.14062 10.9775C6.93554 11.1267 6.68814 11.207 6.43457 11.207H4.5V13.207H6.43457C6.68814 13.207 6.93554 13.2874 7.14062 13.4365L8.42285 14.3691L11 11.793V8.1709L7.14062 10.9775Z" fill={color}/>
    </svg>
  );
};

export default AudioSlash;
