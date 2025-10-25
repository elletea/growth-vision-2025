import React from 'react';

export interface FormProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Form: React.FC<FormProps> = ({
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
      <path d="M13.4997 15H8.49966V13H13.4997V15Z" fill={color}/>
  <path d="M15.4997 10H7.49966V8H15.4997V10Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.9997 2.5C19.3169 2.5 19.6158 2.65108 19.8043 2.90625C19.9927 3.16145 20.049 3.49077 19.9557 3.79395C19.0291 6.80536 19.3652 9.10665 19.7985 11.6445C20.2348 14.1998 20.773 17.0005 19.9782 20.71C19.8792 21.1708 19.4711 21.5 18.9997 21.5H4.99966C4.69799 21.4998 4.41202 21.3635 4.22232 21.1289C4.03259 20.8941 3.9589 20.5852 4.02212 20.29C4.72704 16.9999 4.26551 14.55 3.82681 11.9805C3.38514 9.39356 2.97124 6.69433 4.04458 3.20605C4.17362 2.7867 4.56096 2.50032 4.99966 2.5H18.9997ZM5.7604 4.5C5.08546 7.17345 5.39964 9.30843 5.79849 11.6445C6.18606 13.9146 6.65161 16.3776 6.194 19.5H18.1706C18.6502 16.5987 18.2297 14.3401 17.8268 11.9805C17.4413 9.7225 17.0775 7.3791 17.7047 4.5H5.7604Z" fill={color}/>
    </svg>
  );
};

export default Form;
