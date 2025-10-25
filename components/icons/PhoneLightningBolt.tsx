import React from 'react';

export interface PhoneLightningBoltProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PhoneLightningBolt: React.FC<PhoneLightningBoltProps> = ({
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
      <path d="M12 3.99997H6.5V20H17.5V16.5H19.5V20C19.5 21.1045 18.6046 22 17.5 22H6.5C5.39543 22 4.5 21.1045 4.5 20V3.99997C4.5 2.8954 5.39543 1.99997 6.5 1.99997H12V3.99997Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.6611 1.70114C17.0201 1.33578 17.5975 1.30097 17.998 1.62009C18.3984 1.93946 18.493 2.51004 18.2168 2.94138L15.7803 6.74411L20.8213 8.45505C21.147 8.56564 21.393 8.83626 21.4727 9.17087C21.5521 9.50542 21.4548 9.85816 21.2139 10.1035L14.3389 17.1035C13.98 17.4686 13.4025 17.5034 13.002 17.1845C12.6014 16.8653 12.5072 16.2946 12.7832 15.8633L15.2188 12.0595L10.1787 10.3496C9.85309 10.2391 9.60708 9.96824 9.52734 9.63376C9.44774 9.2992 9.54525 8.94657 9.78613 8.70114L16.6611 1.70114ZM12.3291 8.96677L17.7256 10.7978L18.6699 9.83689L13.2734 8.00583L12.3291 8.96677Z" fill={color}/>
    </svg>
  );
};

export default PhoneLightningBolt;
