import * as Yup from 'yup';

// import * as AppConstant from '@constants';

const NameRegex = /^[a-zA-Z-]+$/;
const HypenRegex = /^(?=.*[a-zA-Z])[a-zA-Z-]+$/;
const NumberRegex = /^[0-9]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const passwordDot = /^[^.]+$/;
const UsernameRegex = /^[a-zA-Z0-9]+$/;
const numberWithDot = /^(\d*\.)?\d+$/;
const numberWithTwoValueAfterDot = /^\d*\.?\d{0,2}$/
const accountHolderNameRegex = /^[a-zA-Z ]*$/

const LoginSchema = Yup.object().shape({
  "email": Yup.string().trim().required('AppConstant.Alert.Messages.ENTER_EMAIL')
    .matches(emailRegex, 'AppConstant.Alert.Messages.INVALID_EMAIL'),

  "password": Yup.string().trim().required('AppConstant.Alert.Messages.ENTER_PASSWORD')
    .matches(passwordDot, { excludeEmptyString: true, message: 'AppConstant.Alert.Messages.INVALID_PASSWORD' })
    .min(8, 'AppConstant.Alert.Messages.PASSWORD_MINIMUM_CHARACTERS')
    .max(16, 'AppConstant.Alert.Messages.PASSWORD_MAXIMUM_CHARACTER')
});

const ForgotPasswordSchema = Yup.object().shape({
  "email": Yup.string().trim().required('AppConstant.Alert.Messages.ENTER_EMAIL')
    .matches(emailRegex, 'AppConstant.Alert.Messages.INVALID_EMAIL'),
})


const SignupSchema = Yup.object().shape({
  "first_name": Yup.string()
    .trim()
    .min(2, 'AppConstant.Alert.Signup.FIRST_SHORT')
    .required('AppConstant.Alert.Signup.ENTER_FIRSTNAME')
    .matches(NameRegex, { excludeEmptyString: true, message: 'AppConstant.Alert.Signup.INVALID_FIRSTNAME' })
    .matches(HypenRegex, { excludeEmptyString: true, message: 'AppConstant.Alert.Signup.HYPENS_ONLY' }),
  "last_name": Yup.string()
    .trim()
    .min(2, 'AppConstant.Alert.Signup.LAST_SHORT')
    .required('AppConstant.Alert.Signup.ENTER_LASTNAME')
    .matches(NameRegex, { excludeEmptyString: true, message: 'AppConstant.Alert.Signup.INVALID_LASTNAME' })
    .matches(HypenRegex, { excludeEmptyString: true, message: 'AppConstant.Alert.Signup.HYPENS_ONLY' }),

  "email": Yup.string()
    .trim()
    .required('AppConstant.Alert.Messages.ENTER_EMAIL')
    .matches(emailRegex, 'AppConstant.Alert.Messages.INVALID_EMAIL'),

  "password": Yup.string()
    .trim()
    .required('AppConstant.Alert.Messages.ENTER_PASSWORD')
    .matches(passwordDot, { excludeEmptyString: true, message: 'AppConstant.Alert.Messages.INVALID_PASSWORD' })
    .min(8, 'AppConstant.Alert.Messages.PASSWORD_MINIMUM_CHARACTERS')
    .max(16, 'AppConstant.Alert.Messages.PASSWORD_MAXIMUM_CHARACTER'),

  "privacy": Yup
    .boolean()
    .oneOf([true], 'AppConstant.Alert.Signup.ACCEPT_TERMS_PRIVACY'),
});

const ChangePasswordSchema = Yup.object().shape({
  "oldPassword": Yup.string()
    .trim()
    .required('AppConstant.Alert.Messages.ENTER_PASSWORD')
    .matches(passwordDot, { excludeEmptyString: true, message: 'AppConstant.Alert.Messages.INVALID_PASSWORD' })
    .min(8, 'AppConstant.Alert.Messages.PASSWORD_MINIMUM_CHARACTERS')
    .max(16, 'AppConstant.Alert.Messages.PASSWORD_MAXIMUM_CHARACTER'),
  "newPassword": Yup.string()
    .trim()
    .required('AppConstant.Alert.Messages.ENTER_PASSWORD')
    .matches(passwordDot, { excludeEmptyString: true, message: 'AppConstant.Alert.Messages.INVALID_PASSWORD' })
    .min(8, 'AppConstant.Alert.Messages.PASSWORD_MINIMUM_CHARACTERS')
    .max(16, 'AppConstant.Alert.Messages.PASSWORD_MAXIMUM_CHARACTER'),
  "confirmPassword": Yup.string()
    .trim()
    .required('AppConstant.Alert.Messages.ENTER_PASSWORD')
    .matches(passwordDot, { excludeEmptyString: true, message: 'AppConstant.Alert.Messages.INVALID_PASSWORD' })
    .min(8, 'AppConstant.Alert.Messages.PASSWORD_MINIMUM_CHARACTERS')
    .max(16, 'AppConstant.Alert.Messages.PASSWORD_MAXIMUM_CHARACTER'),

})



export default {
  LoginSchema,
  SignupSchema,
  ForgotPasswordSchema,
}
