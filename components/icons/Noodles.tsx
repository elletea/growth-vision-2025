import React from 'react';

export interface NoodlesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Noodles: React.FC<NoodlesProps> = ({
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
      <path d="M15.5 22.0002H9V20.0002H15.5V22.0002Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.2764 1.6311L13.1016 8.00024H13.7139L21.4697 3.15259L22.5303 4.8479L17.4863 8.00024H22C22.5523 8.00024 23 8.44796 23 9.00024C22.9998 14.6195 17.9733 19.0002 12 19.0002C6.02667 19.0002 1.00016 14.6195 1 9.00024C1 8.44796 1.44772 8.00024 2 8.00024H10.5234L16.7236 0.369385L18.2764 1.6311ZM3.07324 10.0002C3.62381 13.8742 7.32437 17.0002 12 17.0002C16.6756 17.0002 20.3762 13.8742 20.9268 10.0002H3.07324Z" fill={color}/>
    </svg>
  );
};

export default Noodles;
