import { useField } from 'formik';
import React from 'react';

function CustomCheckbox( { label, ...props } ) {
  const [field, meta] = useField(props);
  
  return (
    <>
        <div className='checkbox'>
            <input 
                type="checkbox"
                {...field} 
                {...meta} 
                className={meta.error ? "input_error" : ""} 
            />
            <span>I agree to the terms of use</span>
        </div>
        {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomCheckbox;