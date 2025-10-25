import React from 'react';

export interface ColorSelectionProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({
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
      <path d="M12.209 9.65437L6.95311 14.9346L5.69237 18.3214L9.11912 17.0762L14.3428 11.8292L15.7597 13.2403L10.3789 18.6466C10.2752 18.7507 10.1498 18.8308 10.0117 18.8809L4.34178 20.9405C3.97554 21.0735 3.56455 20.9816 3.29002 20.7052C3.01557 20.4284 2.92658 20.0167 3.06248 19.6514L5.15526 14.0343L5.19725 13.9366C5.24485 13.8413 5.30736 13.7536 5.3828 13.6778L10.791 8.24421L12.209 9.65437Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.293 4.29304C16.5119 3.07414 18.4881 3.07425 19.707 4.29304C20.926 5.51199 20.926 7.48815 19.707 8.7071L17.914 10.5001L19.207 11.793L17.793 13.2071L10.793 6.2071L12.207 4.79304L13.5 6.08601L15.293 4.29304ZM18.293 5.7071C17.855 5.26936 17.1449 5.26925 16.707 5.7071L14.914 7.50007L16.5 9.08601L18.293 7.29304C18.7309 6.85514 18.7309 6.14501 18.293 5.7071Z" fill={color}/>
    </svg>
  );
};

export default ColorSelection;
