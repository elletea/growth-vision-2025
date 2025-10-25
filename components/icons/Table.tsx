import React from 'react';

export interface TableProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Table: React.FC<TableProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 3.50098C20.5525 3.50124 21.0005 3.94885 21.0005 4.50098L20.9995 19.501C20.9992 20.0529 20.5524 20.5007 20.0005 20.501H3.99951C3.73447 20.5008 3.4799 20.3954 3.29248 20.208C3.10506 20.0206 2.99964 19.766 2.99951 19.501L3.00049 4.5C3.00075 3.94794 3.44837 3.5 4.00049 3.5L20.0005 3.50098ZM4.99951 15.501V18.501H6.99951V15.501H4.99951ZM8.99951 15.501V18.501H19.0005V15.501H8.99951ZM5.00049 13.501H7.00049V10.501H5.00049V13.501ZM9.00049 13.501H19.0005V10.501H9.00049V13.501ZM5.00049 8.50098H7.00049V5.50098H5.00049V8.50098ZM9.00049 8.50098H19.0005V5.50098H9.00049V8.50098Z" fill={color}/>
    </svg>
  );
};

export default Table;
