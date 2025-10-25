import React from 'react';

export interface SquareReaderMagstripeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareReaderMagstripe: React.FC<SquareReaderMagstripeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M9.87895 2.70629C11.0505 1.53492 12.9496 1.53491 14.1211 2.70629L21.293 9.87816C22.4644 11.0497 22.4644 12.9488 21.293 14.1204L14.1211 21.2922C12.9496 22.4636 11.0505 22.4636 9.87895 21.2922L9.00005 20.4133L7.20708 22.2063C7.01954 22.3938 6.76526 22.4993 6.50005 22.4993C6.23483 22.4993 5.98055 22.3938 5.79301 22.2063L4.50005 20.9133L3.20708 22.2063L1.79301 20.7922L3.08598 19.4993L1.79301 18.2063C1.40249 17.8158 1.40249 17.1827 1.79301 16.7922L3.58598 14.9993L2.70708 14.1204C1.53571 12.9488 1.5357 11.0497 2.70708 9.87816L9.87895 2.70629ZM12.7071 4.12035C12.3166 3.73003 11.6835 3.73003 11.293 4.12035L4.12114 11.2922C3.73082 11.6827 3.73082 12.3158 4.12114 12.7063L11.293 19.8782C11.6835 20.2685 12.3166 20.2685 12.7071 19.8782L19.879 12.7063C20.2693 12.3158 20.2693 11.6827 19.879 11.2922L12.7071 4.12035ZM3.91411 17.4993L6.50005 20.0852L7.58598 18.9993L5.00005 16.4133L3.91411 17.4993Z" fill={color}/>
    </svg>
  );
};

export default SquareReaderMagstripe;
