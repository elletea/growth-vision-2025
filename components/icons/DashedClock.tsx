import React from 'react';

export interface DashedClockProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DashedClock: React.FC<DashedClockProps> = ({
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
      <path d="M12 1.99951C14.761 1.99953 17.2628 3.1198 19.0713 4.92822C20.8797 6.73667 21.9999 9.23854 22 11.9995C22 17.5223 17.5228 21.9995 12 21.9995C6.47715 21.9995 2 17.5224 2 11.9995H4C4 16.4178 7.58172 19.9995 12 19.9995C16.4182 19.9995 20 16.4178 20 11.9995C19.9999 9.79027 19.1059 7.791 17.6572 6.34229C16.2084 4.8936 14.2093 3.99953 12 3.99951V1.99951Z" fill={color}/>
  <path d="M13 12.0005H15.5V14.0005H12C11.4479 14.0005 11.0002 13.5525 11 13.0005V8.50049H13V12.0005Z" fill={color}/>
  <path d="M5.66699 7.11182C4.9684 8.01546 4.46008 9.07176 4.19922 10.2212L2.24805 9.77881C2.57486 8.33856 3.21241 7.01679 4.08496 5.88818L5.66699 7.11182Z" fill={color}/>
  <path d="M10.2217 4.19873C9.07235 4.45957 8.0159 4.96801 7.1123 5.6665L5.88867 4.08447C7.01725 3.21196 8.33909 2.57436 9.7793 2.24756L10.2217 4.19873Z" fill={color}/>
    </svg>
  );
};

export default DashedClock;
