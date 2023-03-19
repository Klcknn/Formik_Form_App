import React from 'react';
import { Form, Formik} from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema= {advancedSchema}
      >
       {({isSubmitting}) => (
         <Form>
           <CustomInput label="Username" name="username" type="text" />
           <CustomSelect label="University" name="university" placeholder="Please enter your university" />
           <CustomCheckbox type="checkbox" name="isAccepted"/>
           <button disabled={isSubmitting} type='submit'>Submit</button>
           <Link className='link' to="/">Back to Home Page</Link>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm;