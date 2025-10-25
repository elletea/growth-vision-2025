import React from 'react';

export interface TagWithLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagWithLine: React.FC<TagWithLineProps> = ({
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
      <path d="M13.2071 15.793L11.7931 17.2071L6.79306 12.2071L8.20712 10.793L13.2071 15.793Z" fill={color}/>
  <path d="M14.0001 7.87896C14.5859 7.29317 15.5354 7.29317 16.1212 7.87896C16.7068 8.46476 16.7069 9.41434 16.1212 10.0001C15.5355 10.5856 14.5858 10.5856 14.0001 10.0001C13.4144 9.41431 13.4145 8.46475 14.0001 7.87896Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.1319 2.00884L20.1319 3.07134L20.296 3.10747C20.6659 3.22192 20.9426 3.54434 20.9923 3.93853L21.9923 11.8751C22.0313 12.1857 21.9224 12.4972 21.6983 12.7159L11.963 22.2159C11.5712 22.598 10.9448 22.5939 10.5577 22.2071L1.79306 13.4424C1.40599 13.0554 1.40211 12.429 1.78427 12.0372L11.2843 2.30181C11.5047 2.07592 11.8191 1.96727 12.1319 2.00884ZM3.90537 12.7266L11.2726 20.0938L19.9454 11.6309L19.1036 4.9522L12.3653 4.05669L3.90537 12.7266Z" fill={color}/>
    </svg>
  );
};

export default TagWithLine;
