import { useField } from 'formik';
import React from 'react';

function CustomInput( { label, ...props } ) {
  
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);

  return (
    <>
        <label htmlFor="">{label}</label>
        <input placeholder="Please enter your username" {...field} {...meta} className={meta.error ? "input_error" : ""} />
        {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomInput;
