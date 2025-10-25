import React from 'react';

export interface MagnifyingGlassProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M5.11531 5.11536C7.93575 2.29492 12.5087 2.29496 15.3292 5.11536C17.9096 7.69581 18.1267 11.7413 15.9854 14.5714L21.2071 19.7931L19.793 21.2072L14.5714 15.9855C11.7413 18.1268 7.69576 17.9097 5.11531 15.3292C2.29491 12.5088 2.29488 7.93579 5.11531 5.11536ZM13.9151 6.52942C11.8757 4.49007 8.56876 4.49003 6.52938 6.52942C4.48999 8.56881 4.49002 11.8758 6.52938 13.9152C8.56878 15.9546 11.8757 15.9546 13.9151 13.9152C15.9545 11.8758 15.9545 8.56883 13.9151 6.52942Z" fill={color}/>
    </svg>
  );
};

export default MagnifyingGlass;
