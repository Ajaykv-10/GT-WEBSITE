import React from 'react';

const FormInput = (props: any) => {
  const { name, type, placeHolder, className, ...rest } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeHolder}
      className={`border-[0.5px] w-full  border-gray-300 p-2 text-sm leading-tight text-gray-700 bg-white z-2 focus:outline-none focus:ring-0 ${className}`}
      {...rest}
    />
  );
};

export default FormInput;
