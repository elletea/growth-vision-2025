import React from 'react';

export interface PencilWritingProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PencilWriting: React.FC<PencilWritingProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14.3992 3.2097C14.7876 2.90757 15.3468 2.93207 15.7078 3.28099L19.2693 6.72337C19.4653 6.91289 19.5752 7.17434 19.574 7.447C19.5727 7.71968 19.4602 7.98001 19.2625 8.16771L9.18823 17.7253C9.08874 17.8197 8.97043 17.8923 8.84156 17.9392L8.67554 17.9997H19.9998V19.9997H2.99976C2.67357 19.9997 2.36757 19.8401 2.18042 19.573C1.99353 19.3059 1.94888 18.9643 2.0603 18.6579L4.0603 13.1579L4.1062 13.0515C4.15801 12.9482 4.22705 12.8541 4.31128 12.7742L14.324 3.27415L14.3992 3.2097ZM5.85816 14.0632L4.67066 17.3279L7.9607 16.1316L17.1277 7.43529L15.0056 5.38353L5.85816 14.0632Z" fill={color}/>
    </svg>
  );
};

export default PencilWriting;
