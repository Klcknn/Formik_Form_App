import { useField } from 'formik';
import React from 'react';

function CustomSelect( { label, ...props } ) {
  const [field, meta] = useField(props);
 
  return (
    <>
        <label>{label}</label>
        <select {...field} {...meta} className={meta.error ? "input_error" : ""}>
            <option value="">Please select your university</option>
            <option value="odtü">ODTU University</option>
            <option value="itü">ITU University</option>
            <option value="bogazici">Bogazici University</option>
            <option value="esogü">ESOGU University</option>
        </select>
        {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomSelect;