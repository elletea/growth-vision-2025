import React from 'react';

export interface ChartPieProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChartPie: React.FC<ChartPieProps> = ({
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
      <path d="M10.9961 5.51562C7.61355 5.50267 4.50017 8.73788 4.5 12.5C4.50017 16.3658 7.63416 19.5 11.5 19.5C15.2621 19.5 18.4972 16.3864 18.4844 13.0039L20.4844 12.9961C20.5019 17.6132 16.2383 21.5 11.5 21.5C6.5296 21.5 2.50017 17.4704 2.5 12.5C2.50017 7.7617 6.38676 3.49789 11.0039 3.51562L10.9961 5.51562Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14 2C18.4183 2 22 5.58172 22 10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3C13 2.44772 13.4477 2.00001 14 2ZM15 9H19.915C19.4934 6.48771 17.5123 4.50554 15 4.08398V9Z" fill={color}/>
    </svg>
  );
};

export default ChartPie;
