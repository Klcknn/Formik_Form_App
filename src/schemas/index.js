import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;  // RegExp pattern

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Entering email is mandatory'),
  age: yup
    .number()
    .positive('Please enter a positive age')
    .integer('Please enter your age as an integer')
    .required('Age is mandatory to enter'),
  password: yup
    .string()
    .min(5, 'Please enter a minimum of 5 characters')
    .matches(passwordRules, {
      message: 'Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number',
    })
    .required('Password entry is mandatory'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Re-entering the password is mandatory'),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Please enter a minimum of 3 characters')
    .required('Entering a username is mandatory'),
  university: yup
    .string()
    .oneOf(["odtü","itü","bogazici","esogü"], 'Lütfen üniversitenizi seçiniz...')
    .required('Please select your university.'),
  isAccepted: yup
    .boolean()
    .oneOf([true], 'Please accept the Terms of Use...'),
});
