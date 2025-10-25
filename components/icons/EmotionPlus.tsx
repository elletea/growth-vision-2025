import React from 'react';

export interface EmotionPlusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EmotionPlus: React.FC<EmotionPlusProps> = ({
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
      <path d="M12 3.99951C7.58183 3.99951 4.00018 7.58139 4 11.9995C4 16.4178 7.58172 19.9995 12 19.9995C16.4183 19.9995 20 16.4178 20 11.9995H22C22 17.5224 17.5228 21.9995 12 21.9995C6.47715 21.9995 2 17.5224 2 11.9995C2.00018 6.47682 6.47726 1.99951 12 1.99951V3.99951Z" fill={color}/>
  <path d="M15.8945 14.4478C15.1585 15.9171 13.7276 16.9995 12 16.9995C10.2724 16.9995 8.84149 15.9172 8.10547 14.4478L9.89453 13.5513C10.3562 14.473 11.1638 14.9995 12 14.9995C12.8362 14.9995 13.6438 14.473 14.1055 13.5513L15.8945 14.4478Z" fill={color}/>
  <path d="M19 4.99951H23V6.99951H19V10.9995H17V6.99951H13V4.99951H17V0.999512H19V4.99951Z" fill={color}/>
    </svg>
  );
};

export default EmotionPlus;
