import { useFormik } from 'formik'
import Text from './Text'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import theme from '../theme'
import * as yup from 'yup'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#ffffff',
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 6,
    marginBottom: 14,
    padding: 10,
  },
})

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <View style={styles.container}>
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.username &&
            formik.errors.username && {
              borderColor: theme.colors.error,
            },
        ]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.password}</Text>
      )}
      <TextInput
        style={[
          styles.input,
          formik.touched.password &&
            formik.errors.password && {
              borderColor: theme.colors.error,
            },
        ]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
