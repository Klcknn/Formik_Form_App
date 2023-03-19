import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
    //console.log(values);
    //console.log(actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    actions.resetForm();
};
  
function GeneralForm() {
  
    const {values, errors, handleChange, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,

    });
 
    return (
        <form onSubmit={handleSubmit}>
            <div className='inputdiv'>
                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    value={values.email} 
                    onChange={handleChange} 
                    id="email" 
                    placeholder='Enter your email address'
                    className={errors.email ? 'input_error' : ''} 
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className='inputdiv'>
                <label htmlFor="">Age</label>
                <input 
                    type="number" 
                    value={values.age} 
                    onChange={handleChange} 
                    id="age" 
                    placeholder='Enter your age' 
                    className={errors.age ? 'input_error' : ''}    
                />
                {errors.age && <p className="error">{errors.age}</p>}
            </div>
            <div className='inputdiv'> 
                <label htmlFor="">Password</label>
                <input 
                    type="password" 
                    value={values.password} 
                    onChange={handleChange} 
                    id="password" 
                    placeholder='Enter your password' 
                    className={errors.password ? 'input_error' : ''}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className='inputdiv'>
                <label htmlFor="">Confirm Password</label>
                <input 
                    type="password" 
                    value={values.confirmPassword} 
                    onChange={handleChange} 
                    id="confirmPassword" 
                    placeholder='Enter your confirm password' 
                    className={errors.confirmPassword ? 'input_error' : ''}
                />
                {errors.confirmPassword && (<p className="error">{errors.confirmPassword}</p>)}
            </div>
            <button disabled={isSubmitting} type='submit'>Submit</button>
            <Link className='link' to="/portal">Go to Portal Page</Link>
        </form>
    )
}

export default GeneralForm;