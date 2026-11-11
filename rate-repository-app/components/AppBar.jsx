import { View, StyleSheet, Pressable, Text } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
  },
  text: {
    color: '#ffffff',
    fontWeight: theme.fontWeights.bold,
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontSize: theme.fontSizes.subheading,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
