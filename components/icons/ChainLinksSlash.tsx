import React from 'react';

export interface ChainLinksSlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChainLinksSlash: React.FC<ChainLinksSlashProps> = ({
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
      <path d="M20.2755 11.9465C22.575 14.2464 22.5752 17.9757 20.2755 20.2756C17.9756 22.5753 14.2463 22.5751 11.9464 20.2756L9.87213 18.2004L11.2862 16.7863L13.3604 18.8605C14.8793 20.3792 17.3416 20.3792 18.8604 18.8605C20.3792 17.3417 20.3791 14.8794 18.8604 13.3605L16.7862 11.2863L18.2003 9.87223L20.2755 11.9465Z" fill={color}/>
  <path d="M20.7071 4.70719L13.4141 11.9992L16.9708 15.5558L16.2628 16.2629L15.5557 16.9709L11.9991 13.4142L4.70709 20.7072L3.29303 19.2931L10.585 12.0002L7.02936 8.4445L7.73737 7.73747L8.4444 7.02946L12.0001 10.5851L19.293 3.29313L20.7071 4.70719Z" fill={color}/>
  <path d="M3.72467 3.72477C6.02446 1.42501 9.7538 1.42531 12.0538 3.72477L14.128 5.79997L12.7139 7.21403L10.6397 5.13981C9.1208 3.62119 6.65851 3.62103 5.13971 5.13981C3.62101 6.65862 3.62111 9.12093 5.13971 10.6398L7.21393 12.714L5.79987 14.1281L3.72467 12.0539C1.42523 9.75393 1.42499 6.02456 3.72467 3.72477Z" fill={color}/>
    </svg>
  );
};

export default ChainLinksSlash;
