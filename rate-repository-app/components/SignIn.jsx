import { useFormik } from 'formik'
import Text from './Text'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import theme from '../theme'

const initialValues = {
  username: '',
  password: '',
}

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

  const formik = useFormik({ initialValues, onSubmit })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
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
