import React from 'react';

export interface DiagramProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Diagram: React.FC<DiagramProps> = ({
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
      <path d="M4.00049 17.5C5.10483 17.5003 6.00049 18.3956 6.00049 19.5C6.00022 20.6042 5.10467 21.4997 4.00049 21.5C2.89608 21.5 2.00075 20.6043 2.00049 19.5C2.00049 18.3954 2.89592 17.5 4.00049 17.5Z" fill={color}/>
  <path d="M20.0005 17.5C21.1048 17.5003 22.0005 18.3956 22.0005 19.5C22.0002 20.6042 21.1047 21.4997 20.0005 21.5C18.8961 21.5 18.0008 20.6043 18.0005 19.5C18.0005 18.3954 18.8959 17.5 20.0005 17.5Z" fill={color}/>
  <path d="M13.0005 10H20.0005C20.5525 10.0003 21.0005 10.4479 21.0005 11V16H19.0005V12H4.99951V16H2.99951V11C2.99951 10.4479 3.44745 10.0003 3.99951 10H11.0005V7H13.0005V10Z" fill={color}/>
  <path d="M12.0005 1.5C13.1048 1.50026 14.0005 2.39559 14.0005 3.5C14.0002 4.60418 13.1047 5.49974 12.0005 5.5C10.8961 5.5 10.0008 4.60435 10.0005 3.5C10.0005 2.39543 10.8959 1.5 12.0005 1.5Z" fill={color}/>
    </svg>
  );
};

export default Diagram;
