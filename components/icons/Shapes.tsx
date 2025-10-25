import React from 'react';

export interface ShapesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Shapes: React.FC<ShapesProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5005 13C15.8515 13.0002 16.1773 13.1844 16.3579 13.4854L20.8579 20.9854C21.0429 21.2942 21.048 21.6798 20.8706 21.9932C20.6931 22.3062 20.3604 22.4998 20.0005 22.5H10.9995C10.6396 22.4998 10.3069 22.3062 10.1294 21.9932C9.952 21.6798 9.95707 21.2942 10.1421 20.9854L14.6431 13.4854L14.7173 13.3779C14.9055 13.1409 15.1932 13 15.5005 13ZM12.7661 20.5H18.2339L15.5005 15.9434L12.7661 20.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10.103 7.50488C10.6069 7.55646 11.0005 7.9825 11.0005 8.5V15.5C11.0003 16.0519 10.5524 16.4997 10.0005 16.5H2.99951C2.73447 16.4999 2.4799 16.3945 2.29248 16.207C2.10506 16.0196 1.99962 15.765 1.99951 15.5L2.00049 8.5C2.00049 7.94772 2.4482 7.5 3.00049 7.5H10.0005L10.103 7.50488ZM3.99951 14.5H8.99951L9.00049 9.5H4.00049L3.99951 14.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.0005 1C20.7617 1.00026 23.0005 3.23874 23.0005 6C23.0002 8.76104 20.7615 10.9997 18.0005 11C15.2392 11 13.0008 8.7612 13.0005 6C13.0005 3.23858 15.2391 1 18.0005 1ZM18.0005 3C16.3436 3 15.0005 4.34315 15.0005 6C15.0008 7.65663 16.3438 9 18.0005 9C19.657 8.99974 21.0002 7.65647 21.0005 6C21.0005 4.34331 19.6571 3.00026 18.0005 3Z" fill={color}/>
    </svg>
  );
};

export default Shapes;
