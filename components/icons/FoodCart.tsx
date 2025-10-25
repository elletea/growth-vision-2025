import React from 'react';

export interface FoodCartProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FoodCart: React.FC<FoodCartProps> = ({
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
      <path d="M19 18.5C20.1046 18.5 21 19.3954 21 20.5C21 21.6046 20.1046 22.5 19 22.5C17.8955 22.5 17 21.6046 17 20.5C17 19.3954 17.8955 18.5 19 18.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11.999 1.5C16.5526 1.49974 21 4.96383 21 9.5C21 9.8242 20.8426 10.1279 20.5781 10.3154C20.3136 10.5029 19.9749 10.5507 19.6689 10.4434C17.1119 9.54573 14.7009 9.53995 12.999 9.81836V13.5H19C19.5523 13.5 20 13.9477 20 14.5V17H18V15.5H6V20H15.5V22H5C4.44772 22 4 21.5523 4 21V15.5H2V13.5H10.999V10.2686C9.07961 10.7158 6.50972 11.1641 3.75586 10.4697C3.31167 10.3577 3 9.9581 3 9.5C3 4.96399 7.44599 1.50051 11.999 1.5ZM12 3.5C8.57268 3.50022 5.56195 5.87894 5.07031 8.69629C7.59062 9.10351 9.90907 8.47861 11.7637 8.02832C13.4693 7.61422 15.9998 7.43214 18.7861 8.10352C18.0067 5.5534 15.1838 3.5 12 3.5Z" fill={color}/>
    </svg>
  );
};

export default FoodCart;
