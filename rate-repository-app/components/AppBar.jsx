import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import Text from './Text'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: 'row',
  },
  text: { color: '#ffffff', paddingHorizontal: 15, paddingVertical: 20 },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text style={styles.text} fontSize="subheading" fontWeight="bold">
          Repositories
        </Text>
      </Link>

      <Link to="/sign-in">
        <Text style={styles.text} fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Link>
    </View>
  )
}

export default AppBar
